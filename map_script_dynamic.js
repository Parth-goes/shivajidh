import {getLayers} from './layerLibrary.js';

// ── View state ─────────────────────────────────────────────────────────────
let viewState = {
  longitude: 78.0081,
  latitude:  27.1767,
  zoom:      10,
  pitch:     45,
  bearing:   0
};

const State = {
  currentTime: 0,
  maxTime:     50,
  activeScene: 'MARCH_ANIMATION'
};

// ── DeckGL singleton — created lazily on first renderMapScene() call ────────
let deckgl = null;

function initDeck() {
  const container = document.getElementById('map_container');
  if (!container) {
    console.error('[map_script] #map_container not found — cannot init DeckGL');
    return false;
  }

  deckgl = new deck.DeckGL({
    container: 'map_container',
    debug: true,
    viewState,
    controller: true,
    mapStyle: 'https://tiles.stadiamaps.com/styles/stamen_terrain.json',

    onLoad: () => {
      const map = deckgl.getMapboxMap();
      if (!map) return;
      map.on('style.load', () => {
        const style = map.getStyle();
        if (!style || !style.layers) return;
        style.layers.forEach(layer => {
          const isModern = ['road', 'label', 'poi', 'transit', 'structure'].some(
            keyword => layer.id.toLowerCase().includes(keyword)
          );
          if (isModern) map.setLayoutProperty(layer.id, 'visibility', 'none');
        });
      });
    },

    onViewStateChange: ({ viewState: next }) => {
      viewState = next;
      deckgl.setProps({ viewState });
      const map = deckgl.getMapboxMap();
      if (map && map.loaded()) {
        map.jumpTo({
          center:  [next.longitude, next.latitude],
          zoom:    next.zoom,
          bearing: next.bearing,
          pitch:   next.pitch
        });
      }
    }
  });

  return true;
}

// ── Camera configs ─────────────────────────────────────────────────────────
const viewConfigs = {
  'OVERVIEW_MAP':         { longitude: 76.0,  latitude: 22.0,   zoom: 5,  pitch: 0  },
  'INTERACTIVE_PROGRESS': { longitude: 73.9,  latitude: 18.2,   zoom: 12, pitch: 45 },
  'ACT II':                { longitude: 73.9,  latitude: 18.2,   zoom: 7,  pitch: 30 },
  'ACT III':              { longitude: 73.9,  latitude: 18.2,   zoom: 7,  pitch: 30 },
  'ACT-II':               { longitude: 73.9,  latitude: 18.7,   zoom: 6,  pitch: 45 },
  'ACT IV':              { longitude: 73.97, latitude: 18.277, zoom: 13, pitch: 60 },
  'ACT V':               { longitude: 73.97, latitude: 18.277, zoom: 13, pitch: 60 },
  'ACT VI':                { longitude: 73.97, latitude: 18.277, zoom: 13, pitch: 20 },
  'ACT-VII':              { longitude: 73.97, latitude: 18.277, zoom: 13, pitch: 60 },
  'ACT-IX':               { longitude: 73.97, latitude: 18.277, zoom: 5,  pitch: 20 },
  'ACT XI':                { longitude: 73.9,  latitude: 18.2,   zoom: 7,  pitch: 30 },
  'ACT XIII':              { longitude: 78.02108,  latitude: 27.17952,   zoom: 16,  pitch: 30 },
  'ACT XIV':              { longitude: 75.021111,  latitude: 21.079533,   zoom: 5,  pitch: 30 },
  'ACT XV':              { longitude: 78.02108,  latitude: 27.17952,   zoom: 5,  pitch: 30 },  
};

// ── Main export ────────────────────────────────────────────────────────────
export function renderMapScene(sceneId, currentTime) {
  if (deckgl) {
    deckgl.finalize(); // cleanly destroys the WebGL context
    deckgl = null;
  }
  initDeck(); // attaches fresh to the new #map_container
  // If deckgl doesn't exist yet, initialize it now (DOM must be ready)
  if (!deckgl) {
    const ok = initDeck();
    if (!ok) return; // container still not in DOM — bail
  }

  // Move camera
  if (viewConfigs[sceneId]) {
    deckgl.setProps({
      viewState: {
        ...viewConfigs[sceneId],
        transitionDuration:    2000,
        transitionInterpolator: new deck.FlyToInterpolator()
      }
    });
  }

  // Update layers
  const activeLayers = getLayers(sceneId, currentTime);
  console.log('[map_script] layers for', sceneId, activeLayers);
  deckgl.setProps({ layers: activeLayers });
}

// ── Time helpers ───────────────────────────────────────────────────────────
function advanceTime() {
  State.currentTime = Math.min(State.currentTime + 10, State.maxTime);
  console.log(`Current Campaign Day: ${State.currentTime}`);
  renderMapScene(State.activeScene, State.currentTime);
}

window.advanceTime = advanceTime;