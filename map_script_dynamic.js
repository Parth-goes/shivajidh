import {getLayers} from './layerLibrary.js';


//define the viewstate
let viewState = {
    longitude: 78.0081,
    latitude: 27.1767,
    zoom: 10,
    pitch: 45,
    bearing: 0
  };

const State = {
  currentTime: 0,
  maxTime: 50,
  activeScene: 'MARCH_ANIMATION'
};

// helper function to increse the timestamps
function advanceTime() {
  // Increase time by 10 units (days)
  State.currentTime += 10;

  // Cap the time at the max limit
  if (State.currentTime > State.maxTime) {
    State.currentTime = State.maxTime;
  }

  console.log(`Current Campaign Day: ${State.currentTime}`);
  
  // Re-render only when the button is pressed
  renderCurrentState();
}
// Helper to render with current global values
function renderCurrentState() {
  renderScene(current_scene_id,  State.currentTime);
}

// 1. Initialize DeckGL once
const deckgl = new deck.DeckGL({
  container: 'container',
  debug: true,
  viewState: viewState, 
  controller: true,
  mapStyle: 'https://tiles.stadiamaps.com/styles/stamen_terrain.json',
  
    // hide the non-required layers
    onLoad: () => {
      const map = deckgl.getMapboxMap();
      if (!map) return;
      
      map.on('style.load', () => {
        const style = map.getStyle();
        if (!style || !style.layers) return;

        style.layers.forEach(layer => {
          // Tactical check: hide roads, labels, and points of interest
          const isModern = ['road', 'label', 'poi', 'transit', 'structure'].some(
              keyword => layer.id.toLowerCase().includes(keyword)
          );

          if (isModern) {
              map.setLayoutProperty(layer.id, 'visibility', 'none');
          }
        });
        if (map.getSource('terrainSource')) {
        }
    });
    },

    onViewStateChange: ({ viewState: nextViewState }) => {
    viewState = nextViewState;
    deckgl.setProps({ viewState });

    const map = deckgl.getMapboxMap();
    // Only sync if the map has finished its previous style/source transition
    if (map && map.loaded()) { 
        map.jumpTo({
            center: [nextViewState.longitude, nextViewState.latitude],
            zoom: nextViewState.zoom,
            bearing: nextViewState.bearing,
            pitch: nextViewState.pitch
        });
    }
}
});

function renderScene(sceneId,  currentTime) {
  // 1. Define where the camera should go
  const viewConfigs = {
    'OVERVIEW_MAP': { longitude: 76.0, latitude: 22.0, zoom: 5, pitch: 0 },
    'INTERACTIVE_PROGRESS': { longitude: 73.9, latitude: 18.2, zoom: 12, pitch: 45 },
    'ACT-I': {longitude: 73.9, latitude: 18.2, zoom: 7, pitch: 30 },
    'ACT-Is2': {longitude: 73.9, latitude: 18.2, zoom: 7, pitch: 30 },
    'ACT-II': {longitude: 73.9, latitude: 18.7, zoom: 6, pitch: 45 },
    'ACT-III': {longitude: 73.97, latitude: 18.277, zoom: 13, pitch: 60 },
    'ACT-IV': {longitude: 73.97, latitude: 18.277, zoom: 13, pitch: 60 },
    'ACT-V': {longitude: 73.97, latitude: 18.277, zoom: 13, pitch: 60 },
    'ACT-VII': {longitude: 73.97, latitude: 18.277, zoom: 13, pitch: 60 },
    'ACT-IX': {longitude: 73.97, latitude: 18.277, zoom: 5, pitch: 20 },
  };

  // 2. Update the Camera (View State)
  if (viewConfigs[sceneId]) {
    deckgl.setProps({
      viewState: {
        ...viewConfigs[sceneId],
        transitionDuration: 2000,
        transitionInterpolator: new deck.FlyToInterpolator()
      }
    });
  }

  // 3. Update the Layers using your external library
  const activeLayers = getLayers(sceneId, currentTime);
  console.log(activeLayers)
  
  deckgl.setProps({
    layers: activeLayers
  });
}


// expose functions
window.advanceTime = advanceTime;

const current_scene_id = "ACT-XII"; 
renderScene(current_scene_id, State.currentTime);

