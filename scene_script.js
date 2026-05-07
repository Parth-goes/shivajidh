import { SCENES } from "./scene_desc.js";
import { renderMapScene } from "./map_script_dynamic.js";
// ADDED: resume bg audio if user allowed it on landing page
if (sessionStorage.getItem('audioUnlocked') === 'true') {
  const a = document.getElementById('bg-audio');
  if (a) { a.volume = 1; a.play().catch(() => {}); }
}


/* ═══════════════════════════════════════════
   ADDED: MEDIA PANEL SYSTEM
   - preloadMedia(scene): starts loading in background
   - buildMediaPanel(scene): returns ready DOM element
   - Leaflet is loaded lazily on first map request
═══════════════════════════════════════════ */

// Cache: key = scene index, value = { el, ready, leafletMap }
const mediaCache = {};
let leafletLoaded = false;
let leafletLoadPromise = null;

function loadLeaflet() {
  if (leafletLoaded) return Promise.resolve();
  if (leafletLoadPromise) return leafletLoadPromise;
  leafletLoadPromise = new Promise((resolve) => {
    const s = document.createElement('script');
    s.src = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js';
    s.onload = () => { leafletLoaded = true; resolve(); };
    document.head.appendChild(s);
  });
  return leafletLoadPromise;
}

// ADDED: Preload media for a given scene index (non-blocking)
function preloadMedia(sceneIndex) {
  if (sceneIndex < 0 || sceneIndex >= SCENES.length) return;
  if (mediaCache[sceneIndex]) return; // already preloaded

  const scene = SCENES[sceneIndex];
  if (!scene.media) return;

  const entry = { el: null, ready: false, leafletMap: null };
  mediaCache[sceneIndex] = entry;

  const panel = document.createElement('div');
  panel.className = 'media-panel';

  if (scene.media.type === 'image') {
    const img = new Image();
    img.className = 'media-img';
    img.alt = scene.media.alt || '';
    panel.appendChild(img);
    entry.el = panel;
    img.onload = () => { entry.ready = true; };
    img.onerror = () => { entry.ready = true; }; // fail silently
    img.src = scene.media.src;
  } else if (scene.media.type === 'map') {
    const mapDiv = document.createElement('div');
    mapDiv.className = 'media-map-container';
    panel.appendChild(mapDiv);
    entry.el = panel;

    loadLeaflet().then(() => {
      // Must be in DOM (even hidden) for Leaflet to size correctly
      // We use a detached off-screen div trick: append to body, offscreen
      mapDiv.style.position = 'absolute';
      mapDiv.style.left = '-9999px';
      mapDiv.style.width = '500px';
      mapDiv.style.height = '500px';
      document.body.appendChild(mapDiv);

      const map = L.map(mapDiv, {
        center: scene.media.center,
        zoom: scene.media.zoom,
        zoomControl: true,
        attributionControl: false,
        scrollWheelZoom: false,
      });

      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        maxZoom: 19,
      }).addTo(map);

      // Add custom markers
      (scene.media.markers || []).forEach(m => {
        const icon = L.divIcon({
          className: '',
          html: `<div class="map-marker-wrap"><span class="map-marker-icon">${m.icon || '📍'}</span><div class="map-marker-label">${m.label}</div></div>`,
          iconAnchor: [12, 12],
        });
        L.marker([m.lat, m.lng], { icon }).addTo(map);
      });

      entry.leafletMap = map;
      entry.ready = true;
    });
  }
}

// ADDED: Mount cached media panel into scene layout, invalidate map size
function mountMediaPanel(sceneIndex, containerEl) {
  const entry = mediaCache[sceneIndex];
  if (!entry || !entry.el) return;

  const panel = entry.el;

  // Move mapDiv back from body into the panel's proper place
  if (entry.leafletMap) {
    const mapDiv = panel.querySelector('.media-map-container');
    if (mapDiv) {
      mapDiv.style.position = '';
      mapDiv.style.left = '';
      mapDiv.style.width = '';
      mapDiv.style.height = '';
      // Leaflet needs a frame to recalculate after becoming visible
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          entry.leafletMap.invalidateSize();
        });
      });
    }
  }

  containerEl.appendChild(panel);

  // Trigger fade-in after mount
  requestAnimationFrame(() => {
    panel.classList.add('media-panel-visible');
  });
}
/* ═══════════════════════════════════════════
   SCENE AUDIO MANAGER
   - Fades out bg music when scene has audio
   - Fades back in when scene ends
   - Preloads next scene's audio in background
═══════════════════════════════════════════ */
const bgAudio    = document.getElementById('bg-audio');
const sceneAudio = new Audio();
sceneAudio.preload = 'auto';
let sceneAudioActive = false;

function fadeVolume(audioEl, targetVol, duration = 1000) {
  const steps    = 20;
  const interval = duration / steps;
  const delta    = (targetVol - audioEl.volume) / steps;
  return new Promise(resolve => {
    const t = setInterval(() => {
      audioEl.volume = Math.min(1, Math.max(0, audioEl.volume + delta));
      if ((delta > 0 && audioEl.volume >= targetVol) ||
          (delta < 0 && audioEl.volume <= targetVol)) {
        audioEl.volume = targetVol;
        clearInterval(t);
        resolve();
      }
    }, interval);
  });
}

function startSceneAudio(src) {
  sceneAudio.src = src;
  sceneAudio.volume = 0;
  sceneAudio.loop = true;
  sceneAudio.play().catch(() => {});
  sceneAudioActive = true;

  // Fade bg music down, scene audio up simultaneously
  if (bgAudio) fadeVolume(bgAudio, 0.15);
  fadeVolume(sceneAudio, 1);
}

function stopSceneAudio() {
  if (!sceneAudioActive) return;
  sceneAudioActive = false;

  // Fade scene audio out, bg music back up simultaneously
  fadeVolume(sceneAudio, 0).then(() => {
    sceneAudio.pause();
    sceneAudio.src = '';
  });
  if (bgAudio) fadeVolume(bgAudio, 1);
}

// Preload next scene's audio while current scene plays
function preloadSceneAudio(sceneIndex) {
  if (sceneIndex >= SCENES.length) return;
  const next = SCENES[sceneIndex];
  if (next.audio) {
    const preloader = new Audio();
    preloader.preload = 'auto';
    preloader.src = next.audio;
    // Just touching .src is enough to trigger browser preload
  }
}
/* ═══════════════════════════════════════════ */
let currentScene = 0;
let narrationTimer = null;
let narrationStep = 0;
let decisionMade = false;

function buildDots() {
  const wrap = document.getElementById('scene-dots');
  wrap.innerHTML = '';
  SCENES.forEach((_, i) => {
    const d = document.createElement('div');
    d.className = 'dot' + (i === currentScene ? ' active' : (i < currentScene ? ' done' : ''));
    wrap.appendChild(d);
  });
}

function updateHeader() {
  document.getElementById('header-progress').textContent =
    `Scene ${currentScene + 1} of ${SCENES.length}`;
}

function renderScene(scene) {
  // ── Audio ──────────────────────────────────────────────
  stopSceneAudio();
  if (scene.audio) startSceneAudio(scene.audio);
  preloadSceneAudio(currentScene + 1);

  // ── Stage reset ────────────────────────────────────────
  const stage = document.getElementById('stage');
  stage.innerHTML = '';
  document.getElementById('footer-meta').textContent = scene.footer || '';
  buildDots();
  updateHeader();
  decisionMade = false;
  narrationStep = 0;
  clearTimeout(narrationTimer);

  // ── Preload next scene media in background ─────────────
  preloadMedia(currentScene + 1);

  // ── Outer two-column wrapper ───────────────────────────
  const wrap = document.createElement('div');
  wrap.className = 'scene-enter scene-layout';

  // ── Left panel ─────────────────────────────────────────
  // scene.deckMap = true  → render empty panel with #map_container for Deck.gl
  // scene.media           → use preloaded image/Leaflet cache
  // neither               → render empty placeholder panel
  const needsMap = !!scene.deckMap;

  if (needsMap) {
    const mapPanel = document.createElement('div');
    mapPanel.className = 'media-panel media-panel-empty media-panel-visible';
    const mapDiv = document.createElement('div');
    mapDiv.id = 'map_container';
    mapDiv.className = 'mapHolder';
    mapPanel.appendChild(mapDiv);
    wrap.appendChild(mapPanel);
  } else if (scene.media) {
    if (!mediaCache[currentScene]) preloadMedia(currentScene);
    mountMediaPanel(currentScene, wrap);
  } else {
    const emptyPanel = document.createElement('div');
    emptyPanel.className = 'media-panel media-panel-empty media-panel-visible';
    wrap.appendChild(emptyPanel);
  }

  // ── Right content panel ────────────────────────────────
  const contentPanel = document.createElement('div');
  contentPanel.className = 'content-panel';

  if (scene.type === 'decision') {
    contentPanel.appendChild(buildDecisionScene(scene));
    wrap.appendChild(contentPanel);
    stage.appendChild(wrap);
  } else if (scene.type === 'narration') {
    const { el, start } = buildNarrationScene(scene);
    contentPanel.appendChild(el);
    wrap.appendChild(contentPanel);
    stage.appendChild(wrap);
    start();
  }

  // ── Mount Deck.gl after two rAF ticks (guarantees DOM paint) ──
  if (needsMap) {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const container = document.getElementById('map_container');
        if (container) {
          renderMapScene(scene.act, 10);
        } else {
          console.error('[renderScene] #map_container not found for scene:', scene.act);
        }
      });
    });
  }
}

/* ── DECISION RENDERER ── */
function buildDecisionScene(s) {
  const root = document.createElement('div');
  root.className = 'decision-wrap';

  root.innerHTML = `
    <div class="scene-eyebrow">
      <span class="act-tag">${s.act}</span>
      <span class="role-tag">${s.role}</span>
    </div>
    <h1 class="scene-heading">${s.title}</h1>
    <div class="gold-divider"></div>
    <p class="narrative-text">${s.narrative}</p>
    <div class="role-immersion">${s.role}</div>
    <p class="decision-question">${s.question}</p>
    <div class="options-grid" id="opts"></div>
    <div class="feedback-box" id="feedback-box">
      <div class="feedback-verdict" id="feedback-verdict"></div>
      <div id="feedback-text"></div>
    </div>
    <div class="parent_btn">
    <div class="before-btn-wrap">
      <button class="before-btn" id="before-btn" disabled>
        Previous <span class="before-arrow">&#8592;</span>
      </button>
    </div>
    <div class="next-btn-wrap">
      <button class="next-btn" id="next-btn" disabled>
        Continue <span class="next-arrow">&#8594;</span>
      </button>
    </div>
    </div>
  `;

  const opts = root.querySelector('#opts');
  const keys = ['A','B','C','D'];
  s.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'opt-btn';
    btn.innerHTML = `<span class="opt-key">${keys[i]}</span><span>${opt.text}</span>`;
    btn.addEventListener('click', () => handleDecision(i, s, root));
    opts.appendChild(btn);
  });

  return root;
}

function handleDecision(index, s, root) {
  if (decisionMade) return;
  decisionMade = true;

  const chosen = s.options[index];
  const btns = root.querySelectorAll('.opt-btn');
  btns.forEach((b, i) => {
    b.disabled = true;
    if (i === index) {
      b.classList.add(chosen.correct ? 'state-correct' : 'state-incorrect');
    } else {
      b.classList.add('state-dim');
    }
  });

  const box = root.querySelector('#feedback-box');
  const verdict = root.querySelector('#feedback-verdict');
  const text = root.querySelector('#feedback-text');
  verdict.textContent = chosen.correct ? '✓  Correct stratagem' : '✗  Poor judgment';
  text.textContent = chosen.explanation;
  box.className = 'feedback-box ' + (chosen.correct ? 'correct' : 'incorrect');

  root.querySelector('#next-btn').disabled = false;
  root.querySelector('#next-btn').addEventListener('click', advanceScene);
  root.querySelector('#before-btn').disabled = false;
  root.querySelector('#before-btn').addEventListener('click', beforeScene);
  window.dispatchEvent(new CustomEvent('history:decision', {
    detail: {
      act: s.act,
      role: s.role,
      choice: s.options[index].text,
      correct: chosen.correct
    }
  }));
}

/* ── NARRATION RENDERER ── */
function buildNarrationScene(s) {
  const root = document.createElement('div');
  root.className = 'narration-wrap';

  root.innerHTML = `
    <div class="narration-header">
      <div class="narration-act">${s.act}</div>
      <h1 class="narration-title">${s.title}</h1>
      <div class="narration-gold-line"></div>
    </div>
    <div class="transcript-log" id="transcript-log"></div>
    <div class="narration-step-indicator" id="step-indicator">&#8203;</div>
    <div class="before-btn-wrap">
      <button class="before-btn" id="before-btn" disabled>
        Previous <span class="before-arrow">&#8592;</span>
      </button>
    </div>
    <div class="next-btn-wrap">
      <button class="next-btn" id="next-btn" disabled>
        Continue <span class="next-arrow">&#8594;</span>
      </button>
    </div>
  `;

  function start() {
    const log = root.querySelector('#transcript-log');
    const indicator = root.querySelector('#step-indicator');
    const nextBtn = root.querySelector('#next-btn');
    const prevbtn = root.querySelector('#before-btn');
    const lines = s.narration;
    let step = 0;

    function showLine() {
      if (step >= lines.length) {
        indicator.textContent = '';
        nextBtn.disabled = false;
        prevbtn.disabled = false;
        nextBtn.addEventListener('click', advanceScene);
        prevbtn.addEventListener('click', beforeScene)
        return;
      }
      const prev = log.querySelector('.line-active');
      if (prev) prev.classList.remove('line-active');

      const row = document.createElement('div');
      row.className = 'transcript-line line-active';
      row.innerHTML = `<span class="line-index">${String(step + 1).padStart(2,'0')}</span><span class="line-text">${lines[step]}</span>`;
      log.appendChild(row);

      indicator.textContent = `${step + 1} / ${lines.length}`;

      window.dispatchEvent(new CustomEvent('history:narration', {
        detail: { step, text: lines[step] }
      }));

      step++;
      narrationTimer = setTimeout(showLine, step === 1 ? 1400 : 1700);
    }

    setTimeout(showLine, 400);
  }

  return { el: root, start };
}

/* ── ADVANCE ── */
function advanceScene() {
  clearTimeout(narrationTimer);
  currentScene++;
  if (currentScene >= SCENES.length) {
    renderEnd();
    return;
  }
  renderScene(SCENES[currentScene]);
}

function beforeScene() {
  clearTimeout(narrationTimer);
  currentScene--;
  if (currentScene <= 1) {
    renderScene(SCENES[0]);
    return;
  }
  renderScene(SCENES[currentScene]);
}



function renderEnd() {
  const stage = document.getElementById('stage');
  stage.innerHTML = '';
  document.getElementById('footer-meta').textContent = 'Simulation complete';
  buildDots();
  updateHeader();

  const wrap = document.createElement('div');
  wrap.className = 'scene-enter';
  wrap.innerHTML = `
    <div class="end-card">
      <div class="end-seal">&#9670;</div>
      <h2 class="end-title">Campaign Complete</h2>
      <div class="gold-divider" style="width:80px;margin:1rem auto;"></div>
      <p class="narrative-text" style="font-size:0.95rem;">
        On the 6th of June, 1674, at Raigad, Shivaji was crowned Chhatrapati, transforming a defiant regional power into a sovereign kingdom. This coronation was far more than a ceremonial act, it legitimized Maratha rule, consolidated authority, and marked the emergence of a structured state capable of expansion and governance. For the Deccan, it signaled a decisive shift in power, as the Marathas moved from resistance to dominance, reshaping the political landscape of the region. For Aurangzeb, however, this moment represented a direct challenge to imperial supremacy, an assertion of kingship where only subordination was expected. His response would define the latter half of his reign, as he plunged deeper into the Deccan campaigns, draining Mughal resources and weakening the empire’s foundation. In elevating himself to the status of a crowned ruler, Shivaji not only secured his legacy but also set in motion forces that would ultimately contribute to the gradual decline of Mughal authority in India.

      </p>
      <p class="end-sub" style="margin-top:1.5rem;">1665 – 1674 · Deccan Plateau</p>
    </div>
  `;
  stage.appendChild(wrap);
}

/* ── INIT ── */
// ADDED: Preload first scene's media immediately on load
preloadMedia(0);
renderScene(SCENES[currentScene]);

window.addEventListener('history:decision', e => console.log('[history:decision]', e.detail));
window.addEventListener('history:narration', e => console.log('[history:narration]', e.detail));
window.addEventListener("load", () => {
  if (performance.navigation.type === 1) {
    window.location.href = "index.html";
  }
});