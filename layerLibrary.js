// define the forts in GeoJSON
export const fort_list = {
"type": "FeatureCollection",
"name": "Fort_list",
"features": [
{ "type": "Feature", "properties": { "Name": "purandar" }, "geometry": { "type": "Point", "coordinates": [ 73.973492, 18.2825268, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "vajragarh" }, "geometry": { "type": "Point", "coordinates": [ 73.9794371, 18.2830797, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "kondhana" }, "geometry": { "type": "Point", "coordinates": [ 73.7558777, 18.366277, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "rohira" }, "geometry": { "type": "Point", "coordinates": [ 73.8213658, 18.1029245, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "lohagad" }, "geometry": { "type": "Point", "coordinates": [ 73.4758618, 18.7101945, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "isagarh" }, "geometry": { "type": "Point", "coordinates": [ 77.8867247, 24.8354862, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "tanki" }, "geometry": { "type": "Point", "coordinates": [ 74.4540741, 20.1908091, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "tikona" }, "geometry": { "type": "Point", "coordinates": [ 73.5127728, 18.6318418, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "mahuli" }, "geometry": { "type": "Point", "coordinates": [ 73.2567224, 19.4837631, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "muranjan" }, "geometry": { "type": "Point", "coordinates": [ 73.2217144, 18.9803572, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "bhandardurg" }, "geometry": { "type": "Point", "coordinates": [ 73.5155618, 19.9304278, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "nardurg" }, "geometry": { "type": "Point", "coordinates": [ 76.2895553, 17.8171372, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "ankola" }, "geometry": { "type": "Point", "coordinates": [ 74.3083189, 14.6613309, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "kohaj" }, "geometry": { "type": "Point", "coordinates": [ 72.9887921, 19.6697825, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "basant" }, "geometry": { "type": "Point", "coordinates": [ 74.1003531, 17.3412165, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "karnala" }, "geometry": { "type": "Point", "coordinates": [ 73.1154422, 18.887653, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "songarh" }, "geometry": { "type": "Point", "coordinates": [ 74.024989, 19.6438121, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "mangarh" }, "geometry": { "type": "Point", "coordinates": [ 73.350937, 18.3117782, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "rajgad" }, "geometry": { "type": "Point", "coordinates": [ 73.6822129, 18.2466332, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "torna" }, "geometry": { "type": "Point", "coordinates": [ 73.6223164, 18.2765044, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "linagana" }, "geometry": { "type": "Point", "coordinates": [ 73.5023756, 18.2532509, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "mahargarh" }, "geometry": { "type": "Point", "coordinates": [ 77.9302834, 19.837585, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "saragarh" }, "geometry": { "type": "Point", "coordinates": [ 73.2277917, 18.5425614, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "ghosalgarh" }, "geometry": { "type": "Point", "coordinates": [ 73.0907482, 18.3647082, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "asheri" }, "geometry": { "type": "Point", "coordinates": [ 72.9218078, 19.8214965, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "palgad" }, "geometry": { "type": "Point", "coordinates": [ 73.3510667, 17.8152847, 0.0 ] } }
]
}

export const jai_singh_route = {
"type": "FeatureCollection",
"name": "jai_singh_route",
"features": [
{ "type": "Feature", "properties": { "Name": "Handia" }, "geometry": { "type": "Point", "coordinates": [ 76.9829058, 22.486322, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "Aurangabad" }, "geometry": { "type": "Point", "coordinates": [ 75.3393196, 19.875754, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "Pune" }, "geometry": { "type": "Point", "coordinates": [ 73.8786239, 18.5246089, 0.0 ] } }
],
path: [
    [76.9829058, 22.486322], // Handia
    [75.3393196, 19.875754], // Aurangabad
    [73.8786239, 18.5246089] // Pune
  ],
  // Timestamps: Handia (Day 0), Aurangabad (Day 10), Pune (Day 20)
  timestamps: [0, 10, 20], 
  places: ["Handia", "Aurangabad", "Pune"]
};

export const territory_maratha = {
"type": "FeatureCollection",
"name": "Fort_list",
"features": [
{ "type": "Feature", "properties": { "Name": "northwest_boundary" }, "geometry": { "type": "Point", "coordinates": [ 72.651006, 19.934525, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "asheri" }, "geometry": { "type": "Point", "coordinates": [ 72.9218078, 19.8214965, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "bhandardurg" }, "geometry": { "type": "Point", "coordinates": [ 73.5155618, 19.9304278, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "tanki" }, "geometry": { "type": "Point", "coordinates": [ 74.4540741, 20.1908091, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "mahargarh" }, "geometry": { "type": "Point", "coordinates": [ 77.9302834, 19.837585, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "nardurg" }, "geometry": { "type": "Point", "coordinates": [ 76.2895553, 17.8171372, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "basant" }, "geometry": { "type": "Point", "coordinates": [ 74.1003531, 17.3412165, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "southwest_boundary" }, "geometry": { "type": "Point", "coordinates": [ 73.185664, 17.2899, 0.0 ] } },
]
}

// convert the points into GeoJsonPlygon
const polygonCoords = territory_maratha.features.map(f => [
  f.geometry.coordinates[0], 
  f.geometry.coordinates[1]
]);

// 2. GeoJSON Polygons MUST close the loop (First point == Last point)
if (polygonCoords.length > 0) {
  polygonCoords.push(polygonCoords[0]);
}

// 3. Create the new Polygon GeoJSON object
export const maratha_polygon = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": { "name": "Maratha Empire Territory" },
      "geometry": {
        "type": "Polygon",
        "coordinates": [polygonCoords] // Note: Polygon coordinates are nested in an array
      }
    }
  ]
};


// Act 4 location of the troops
const mughal_troop = {
"type": "FeatureCollection",
"name": "troop_location",
"features": [
{ "type": "Feature", "properties": { "Name": "rasul_beg" }, "geometry": { "type": "Point", "coordinates": [ 73.9861421, 18.2689105, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "doud_khan" }, "geometry": { "type": "Point", "coordinates": [ 73.9690273, 18.2653404, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "chaturbhuj" }, "geometry": { "type": "Point", "coordinates": [ 73.9903876, 18.2785027, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "mitrasen" }, "geometry": { "type": "Point", "coordinates": [ 73.9931513, 18.2645313, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "gun_position" }, "geometry": { "type": "Point", "coordinates": [ 73.9952933, 18.2843908, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "rajah_narsingh" }, "geometry": { "type": "Point", "coordinates": [ 73.9657474, 18.2834648, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "kirat_singh" }, "geometry": { "type": "Point", "coordinates": [ 73.9714575, 18.2879675, 0.0 ] } }
]
}

// act 5 vajragarh
const mughal_troop_vajragarh = {
"type": "FeatureCollection",
"name": "troop_location",
"features": [
{ "type": "Feature", "properties": { "Name": "rasul_beg" }, "geometry": { "type": "Point", "coordinates": [ 73.9861421, 18.2689105, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "doud_khan" }, "geometry": { "type": "Point", "coordinates": [ 73.9690273, 18.2653404, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "chaturbhuj" }, "geometry": { "type": "Point", "coordinates": [ 73.9794371, 18.2830797, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "mitrasen" }, "geometry": { "type": "Point", "coordinates": [ 73.9931513, 18.2645313, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "gun_position" }, "geometry": { "type": "Point", "coordinates": [ 73.9952933, 18.2843908, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "rajah_narsingh" }, "geometry": { "type": "Point", "coordinates": [ 73.9657474, 18.2834648, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "kirat_singh" }, "geometry": { "type": "Point", "coordinates": [ 73.9714575, 18.2879675, 0.0 ] } }
]
}

// treaty of purandar
// forts of shivaji after the treaty
const maratha_forts = {
"type": "FeatureCollection",
"name": "Fort_list",
"features": [
{ "type": "Feature", "properties": { "Name": "rajgad" }, "geometry": { "type": "Point", "coordinates": [ 73.6822129, 18.2466332, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "torna" }, "geometry": { "type": "Point", "coordinates": [ 73.6223164, 18.2765044, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "linagana" }, "geometry": { "type": "Point", "coordinates": [ 73.5023756, 18.2532509, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "mahargarh" }, "geometry": { "type": "Point", "coordinates": [ 77.9302834, 19.837585, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "saragarh" }, "geometry": { "type": "Point", "coordinates": [ 73.2277917, 18.5425614, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "ghosalgarh" }, "geometry": { "type": "Point", "coordinates": [ 73.0907482, 18.3647082, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "asheri" }, "geometry": { "type": "Point", "coordinates": [ 72.9218078, 19.8214965, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "palgad" }, "geometry": { "type": "Point", "coordinates": [ 73.3510667, 17.8152847, 0.0 ] } }
]
}

// forts surrendered
export const mughal_forts = {
"type": "FeatureCollection",
"name": "Fort_list",
"features": [
{ "type": "Feature", "properties": { "Name": "purandar" }, "geometry": { "type": "Point", "coordinates": [ 73.973492, 18.2825268, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "vajragarh" }, "geometry": { "type": "Point", "coordinates": [ 73.9794371, 18.2830797, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "kondhana" }, "geometry": { "type": "Point", "coordinates": [ 73.7558777, 18.366277, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "rohira" }, "geometry": { "type": "Point", "coordinates": [ 73.8213658, 18.1029245, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "lohagad" }, "geometry": { "type": "Point", "coordinates": [ 73.4758618, 18.7101945, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "isagarh" }, "geometry": { "type": "Point", "coordinates": [ 77.8867247, 24.8354862, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "tanki" }, "geometry": { "type": "Point", "coordinates": [ 74.4540741, 20.1908091, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "tikona" }, "geometry": { "type": "Point", "coordinates": [ 73.5127728, 18.6318418, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "mahuli" }, "geometry": { "type": "Point", "coordinates": [ 73.2567224, 19.4837631, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "muranjan" }, "geometry": { "type": "Point", "coordinates": [ 73.2217144, 18.9803572, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "bhandardurg" }, "geometry": { "type": "Point", "coordinates": [ 73.5155618, 19.9304278, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "nardurg" }, "geometry": { "type": "Point", "coordinates": [ 76.2895553, 17.8171372, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "ankola" }, "geometry": { "type": "Point", "coordinates": [ 74.3083189, 14.6613309, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "kohaj" }, "geometry": { "type": "Point", "coordinates": [ 72.9887921, 19.6697825, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "basant" }, "geometry": { "type": "Point", "coordinates": [ 74.1003531, 17.3412165, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "karnala" }, "geometry": { "type": "Point", "coordinates": [ 73.1154422, 18.887653, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "songarh" }, "geometry": { "type": "Point", "coordinates": [ 74.024989, 19.6438121, 0.0 ] } },
]
}

// route to agra
const route_agra = {
"type": "FeatureCollection",
"name": "to_agra",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
"features": [
{ "type": "Feature", "properties": { "Name": "Rajgad", "tessellate": -1, "extrude": 0, "visibility": -1 }, "geometry": { "type": "Point", "coordinates": [ 73.682212810343202, 18.246633405058692, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "Supa", "tessellate": -1, "extrude": 0, "visibility": -1 }, "geometry": { "type": "Point", "coordinates": [ 74.536819955096647, 18.957821019002289, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "Aurangabad", "tessellate": -1, "extrude": 0, "visibility": -1 }, "geometry": { "type": "Point", "coordinates": [ 75.339319607765972, 19.875753956326321, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "Burhanpur", "tessellate": -1, "extrude": 0, "visibility": -1 }, "geometry": { "type": "Point", "coordinates": [ 76.218009484909956, 21.314502071920831, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "Gwalior", "tessellate": -1, "extrude": 0, "visibility": -1 }, "geometry": { "type": "Point", "coordinates": [ 78.177162979972394, 26.212358315108052, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "Agra Fort", "tessellate": -1, "extrude": 0, "visibility": -1 }, "geometry": { "type": "Point", "coordinates": [ 78.02108144452113, 27.179520562152192, 0.0 ] } }
]
}

// Map the Point features into a single coordinate array for the Path
const agraMarchPath = route_agra.features.map(f => [
  f.geometry.coordinates[0], 
  f.geometry.coordinates[1], 
  500 // Lift to 500m to stay above the satellite/terrain layer
]);

// escape route
const escape_route = {
"type": "FeatureCollection",
"name": "escape_route",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
"features": [
{ "type": "Feature", "properties": { "Name": "Agra Fort", "tessellate": -1, "extrude": 0, "visibility": -1 }, "geometry": { "type": "Point", "coordinates": [ 78.022434509631736, 27.178980787088779, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "Mathura", "tessellate": -1, "extrude": 0, "visibility": -1 }, "geometry": { "type": "Point", "coordinates": [ 77.67371677432871, 27.491459512471739, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "Allahabad", "tessellate": -1, "extrude": 0, "visibility": -1 }, "geometry": { "type": "Point", "coordinates": [ 81.854601850172386, 25.468337985000929, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "Benaras", "tessellate": -1, "extrude": 0, "visibility": -1 }, "geometry": { "type": "Point", "coordinates": [ 82.973914428393257, 25.317645207402919, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "Gaya", "tessellate": -1, "extrude": 0, "visibility": -1 }, "geometry": { "type": "Point", "coordinates": [ 85.000219364110279, 24.791399387956961, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "Puri", "tessellate": -1, "extrude": 0, "visibility": -1 }, "geometry": { "type": "Point", "coordinates": [ 85.831235920547726, 19.81345541682418, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "Rajgad", "tessellate": -1, "extrude": 0, "visibility": -1 }, "geometry": { "type": "Point", "coordinates": [ 73.682212809483474, 18.24663341546778, 0.0 ] } }
]
}

// Map the Point features into a single coordinate array for the Path
const agraEscapePath = escape_route.features.map(f => [
  f.geometry.coordinates[0], 
  f.geometry.coordinates[1], 
  500 // Lift to 500m to stay above the satellite/terrain layer
]);
// layer definitions

export const getLayers = (scene_id,  currentTime) => {
  switch (scene_id) {
    // initial forts
      case 'ACT II':
        // return the fort Fort_list
        return[
          new deck.IconLayer({
          id: 'fort-flags',
          data: fort_list.features,
          // Path to your saffron flag image
          iconAtlas: './assets/shivaji_flag.png', 
          // Definition of the icon within the atlas
          iconMapping: {
            flag: {x: 0, y: 0, width: 225, height: 225, mask: false}
          },
          // Tells the layer to use the 'flag' definition above
          getIcon: d => 'flag',
          getPosition: d => d.geometry.coordinates,
          getSize: 30, // Adjust size as needed
          sizeScale: 1,
          pickable: true
        }),

        new deck.TextLayer({
          id: 'fort-labels',
          data: fort_list.features,
          getPosition: d => d.geometry.coordinates,
          // Pulls "purandar" from your GeoJSON properties
          getText: d => d.properties.Name, 
          getSize: 11,
          getAngle: 0,
          getTextAnchor: 'middle',
          getAlignmentBaseline: 'bottom',
          // Offset the text so it sits above the flag
          getPixelOffset: [0, -45], 
          getColor: [255, 196, 100], // White text
          fontFamily: 'Garamond',
          fontWeight: 'bold',
          outlineWidth: 2,
          outlineColor: [0, 0, 0] // Black outline for readability
        })
        ]
    // route by jai singh
    case 'ACT III':
      return [
      new deck.PathLayer({
              id: 'jai-signh-route',
              data: [{ path: jai_singh_route.path }],
              getPath: d => d.path,
              getColor: [0, 125, 50], // Saffron/Orange for the route
              getWidth: 20,
              widthMinPixels: 4,
              capRounded: true,
              jointRounded: true,
              shadowEnabled: true, // Adds depth against the satellite image
              parameters: {
                depthTest: false // Ensures it stays visible over high-res tiles
            }
          }),    
          new deck.ScatterplotLayer({
            id: 'jai-singh-route-stops',
            data: jai_singh_route.features,
            getPosition: d => [d.geometry.coordinates[0], d.geometry.coordinates[1], 550],
            getFillColor: [255, 255, 255],
            getRadius: 1000,
            radiusMinPixels: 5
          }),
          new deck.TextLayer({
          id: 'agra-march-text',
          data: jai_singh_route.features,
          getPosition: d => [d.geometry.coordinates[0], d.geometry.coordinates[1] , 500], // Slightly above the line
          getText: d => d.properties.Name,
          getSize: 12,
          getAngle: 0,
          getTextAnchor: 'middle',
          getAlignmentBaseline: 'bottom',
          getColor: [0, 153, 50],
          outlineWidth: 2,
          outlineColor: [0, 0, 0]
        }),
      ]
    // maratha region
    case 'ACT-II':  
      return [
        new deck.GeoJsonLayer({
          id: 'territory_maratha',
          data: maratha_polygon,
          
          // Styling the inside of the territory
          filled: true,
          getFillColor: [255, 165, 0, 100], // Orange with 100/255 transparency
          
          // Styling the border line
          stroked: true,
          getLineColor: [255, 100, 0, 255], // Darker orange for the border
          getLineWidth: 2,
          lineWidthMinPixels: 2,
          
          // Ensure it renders correctly in 3D terrain
          extruded: false, 
          pickable: true
        })
      ]
    // purandar fort
    case 'ACT IV':
    case 'ACT V': 
      return [
        new deck.TileLayer({
          id: 'regional-satellite-layer',
          data: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
          
          // Define your boundary [minLng, minLat, maxLng, maxLat]
          // Example: The area around Asheri or Purandar
          extent: [73.960856, 18.260417, 74.029242, 18.3], 
          // High-Resolution Settings
          tileSize: 256,
          zoomOffset: 2, // This makes the imagery 2x sharper at the same zoom
          maxZoom: 16,
          renderSubLayers: props => {
            const {bbox: {west, south, east, north}} = props.tile;

            return new deck.BitmapLayer(props, {
              data: null,
              image: props.data,
              bounds: [west, south, east, north],
              opacity: 0.9,
              desaturate: 0.2
            });
          }
        }),
        new deck.PathLayer({
          id: 'fort-pointers',
          data: fort_list.features.filter(f => f.properties.Name === 'purandar'),// Using your existing fort list
          getPath: d => [
            d.geometry.coordinates, // The base [lng, lat, 0]
            [d.geometry.coordinates[0], d.geometry.coordinates[1] , 500] // Point 500m in the air
          ],
          getColor: [255, 255, 255, 200],
          widthMinPixels: 2,
          opacity: 0.8
        }),
        new deck.TextLayer({
          id: 'fort-labels',
          data: fort_list.features.filter(f => f.properties.Name === 'purandar'),
          getPosition: d => [d.geometry.coordinates[0], d.geometry.coordinates[1] , 500], // Slightly above the line
          getText: d => d.properties.Name,
          getSize: 22,
          getAngle: 0,
          getTextAnchor: 'middle',
          getAlignmentBaseline: 'bottom',
          getColor: [255, 255, 255],
          outlineWidth: 2,
          outlineColor: [0, 0, 0]
        })        
      ]
    // mughal troop locations
      case 'ACT VI': 
      case 'ACT VII':
      case 'ACT VIII':
      case 'ACT IX':
      case 'ACT X':
      return [
        new deck.TileLayer({
          id: 'regional-satellite-layer',
          data: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
          
          // Define your boundary [minLng, minLat, maxLng, maxLat]
          // Example: The area around Asheri or Purandar
          extent: [73.960856, 18.260417, 74.029242, 18.3], 
          // High-Resolution Settings
          tileSize: 256,
          zoomOffset: 2, // This makes the imagery 2x sharper at the same zoom
          maxZoom: 16,
          renderSubLayers: props => {
            const {bbox: {west, south, east, north}} = props.tile;

            return new deck.BitmapLayer(props, {
              data: null,
              image: props.data,
              bounds: [west, south, east, north],
              opacity: 0.9,
              desaturate: 0.2
            });
          }
        }),
        new deck.PathLayer({
          id: 'fort-pointers',
          data: fort_list.features.filter(f => f.properties.Name === 'purandar'),// Using your existing fort list
          getPath: d => [
            d.geometry.coordinates, // The base [lng, lat, 0]
            [d.geometry.coordinates[0], d.geometry.coordinates[1] , 500] // Point 500m in the air
          ],
          getColor: [255, 255, 255, 200],
          widthMinPixels: 2,
          opacity: 0.8
        }),
        new deck.TextLayer({
          id: 'fort-labels',
          data: fort_list.features.filter(f => f.properties.Name === 'purandar'),
          getPosition: d => [d.geometry.coordinates[0], d.geometry.coordinates[1] , 500], // Slightly above the line
          getText: d => d.properties.Name,
          getSize: 22,
          getAngle: 0,
          getTextAnchor: 'middle',
          getAlignmentBaseline: 'bottom',
          getColor: [255, 255, 255],
          outlineWidth: 2,
          outlineColor: [0, 0, 0]
        }),
        new deck.IconLayer({
          id: 'mughal-troop',
          data: mughal_troop.features ,
          // Path to your saffron flag image
          iconAtlas: './assets/mughal_flag.png', 
          // Definition of the icon within the atlas
          iconMapping: {
            flag: {x: 0, y: 0, width: 40, height: 28, mask: false}
          },
          // Tells the layer to use the 'flag' definition above
          getIcon: d => 'flag',
          getPosition: d => d.geometry.coordinates,
          getSize: 30, // Adjust size as needed
          sizeScale: 1,
          pickable: true
        })
      ]
    // capture of vajragarh
      case 'ACT-V': 
        return [
        new deck.TileLayer({
          id: 'regional-satellite-layer',
          data: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
          
          // Define your boundary [minLng, minLat, maxLng, maxLat]
          // Example: The area around Asheri or Purandar
          extent: [73.960856, 18.260417, 74.029242, 18.3], 
          // High-Resolution Settings
          tileSize: 256,
          zoomOffset: 2, // This makes the imagery 2x sharper at the same zoom
          maxZoom: 16,
          renderSubLayers: props => {
            const {bbox: {west, south, east, north}} = props.tile;

            return new deck.BitmapLayer(props, {
              data: null,
              image: props.data,
              bounds: [west, south, east, north],
              opacity: 0.9,
              desaturate: 0.2
            });
          }
        }),
        new deck.PathLayer({
          id: 'fort-pointers',
          data: fort_list.features.filter(f => f.properties.Name === 'purandar'),// Using your existing fort list
          getPath: d => [
            d.geometry.coordinates, // The base [lng, lat, 0]
            [d.geometry.coordinates[0], d.geometry.coordinates[1] , 500] // Point 500m in the air
          ],
          getColor: [255, 255, 255, 200],
          widthMinPixels: 2,
          opacity: 0.8
        }),
        new deck.TextLayer({
          id: 'fort-labels',
          data: fort_list.features.filter(f => f.properties.Name === 'purandar'),
          getPosition: d => [d.geometry.coordinates[0], d.geometry.coordinates[1] , 500], // Slightly above the line
          getText: d => d.properties.Name,
          getSize: 22,
          getAngle: 0,
          getTextAnchor: 'middle',
          getAlignmentBaseline: 'bottom',
          getColor: [255, 255, 255],
          outlineWidth: 2,
          outlineColor: [0, 0, 0]
        }),
        new deck.IconLayer({
          id: 'mughal-troop',
          data: mughal_troop_vajragarh.features ,
          // Path to your saffron flag image
          iconAtlas: './assets/mughal_flag.png', 
          // Definition of the icon within the atlas
          iconMapping: {
            flag: {x: 0, y: 0, width: 40, height: 28, mask: false}
          },
          // Tells the layer to use the 'flag' definition above
          getIcon: d => 'flag',
          getPosition: d => d.geometry.coordinates,
          getSize: 20, // Adjust size as needed
          sizeScale: 1,
          pickable: true
        })
      ]
    // forts ceceded to marathas
      case 'ACT XI':
      case 'ACT XII':
        return [
          new deck.IconLayer({
          id: 'maratha-forts',
          data: maratha_forts.features,
          // Path to your saffron flag image
          iconAtlas: './assets/shivaji_flag.png', 
          // Definition of the icon within the atlas
          iconMapping: {
            flag: {x: 0, y: 0, width: 225, height: 225, mask: false}
          },
          // Tells the layer to use the 'flag' definition above
          getIcon: d => 'flag',
          getPosition: d => d.geometry.coordinates,
          getSize: 30, // Adjust size as needed
          sizeScale: 1,
          pickable: true
        }),
        new deck.IconLayer({
          id: 'mughal-forts',
          data: mughal_forts.features,
          // Path to your saffron flag image
          iconAtlas: './assets/mughal_flag.png', 
          // Definition of the icon within the atlas
          iconMapping: {
            flag: {x: 0, y: 0, width: 40, height: 28, mask: false}
          },
          // Tells the layer to use the 'flag' definition above
          getIcon: d => 'flag',
          getPosition: d => d.geometry.coordinates,
          getSize: 20, // Adjust size as needed
          sizeScale: 1,
          pickable: true
        }),
        new deck.TextLayer({
          id: 'fort-labels',
          data: fort_list.features,
          getPosition: d => d.geometry.coordinates,
          // Pulls "purandar" from your GeoJSON properties
          getText: d => d.properties.Name, 
          getSize: 11,
          getAngle: 20,
          getTextAnchor: 'middle',
          getAlignmentBaseline: 'bottom',
          // Offset the text so it sits above the flag
          getPixelOffset: [0, -45], 
          getColor: [0,0,0], // White text
          fontFamily: 'Garamond',
          fontWeight: 'bold',
          outlineWidth: 2,
          outlineColor: [0, 0, 0] // Black outline for readability
        })
      ]
      
      // journey to agra decision
      case 'ACT-XIII' :
        return [
          new deck.TileLayer({
            id: 'regional-satellite-layer',
            data: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
            
            // Define your boundary [minLng, minLat, maxLng, maxLat]
            // Example: The area around Asheri or Purandar
            extent: [78.010203, 27.173439, 78.033344, 27.186486], 
            // High-Resolution Settings
            tileSize: 256,
            zoomOffset: 2, // This makes the imagery 2x sharper at the same zoom
            maxZoom: 16,
            minZoom: 12,
            renderSubLayers: props => {
              const {bbox: {west, south, east, north}} = props.tile;

              return new deck.BitmapLayer(props, {
                data: null,
                image: props.data,
                bounds: [west, south, east, north],
                opacity: 0.9,
                desaturate: 0.2
              });
            }
        }),
          new deck.ScatterplotLayer({
            id: 'agra-marker',
            data: [
              { position: [78.021111, 27.179533], name: 'Agra' }
            ],
            getPosition: d => d.position,
            getFillColor: [255, 0, 0, 200], // Red circle
            getRadius: 700, // Radius in meters
            radiusMinPixels: 10, // Ensures it stays visible when zooming out
            stroked: true,
            getLineColor: [255, 255, 255],
            lineWidthMinPixels: 2,
            opacity: 0.5
          }),
          new deck.TextLayer({
          id: 'agra-text',
          data:  [
              { position: [78.021111, 27.179533], name: 'Agra Fort' }
            ],
          getPosition: d => [d.position[0], d.position[1] , 500], // Slightly above the line
          getText: d => d.name,
          getSize: 22,
          getAngle: 0,
          getTextAnchor: 'middle',
          getAlignmentBaseline: 'bottom',
          getColor: [0, 153, 50],
          outlineWidth: 2,
          outlineColor: [0, 0, 0]
        }),
        ]
      
      // to agra route
      case 'ACT XIV':
        return [
          new deck.PathLayer({
            id: 'agra-campaign-route',
            data: [{ path: agraMarchPath }],
            getPath: d => d.path,
            getColor: [255, 140, 0], // Saffron/Orange for the route
            getWidth: 20,
            widthMinPixels: 4,
            capRounded: true,
            jointRounded: true,
            shadowEnabled: true, // Adds depth against the satellite image
            parameters: {
              depthTest: false // Ensures it stays visible over high-res tiles
            }
          }),
          new deck.ScatterplotLayer({
            id: 'route-stops',
            data: route_agra.features,
            getPosition: d => [d.geometry.coordinates[0], d.geometry.coordinates[1], 550],
            getFillColor: [255, 255, 255],
            getRadius: 1000,
            radiusMinPixels: 5
          }),
          new deck.TextLayer({
          id: 'agra-march-text',
          data: route_agra.features,
          getPosition: d => [d.geometry.coordinates[0], d.geometry.coordinates[1] , 500], // Slightly above the line
          getText: d => d.properties.Name,
          getSize: 12,
          getAngle: 0,
          getTextAnchor: 'middle',
          getAlignmentBaseline: 'bottom',
          getColor: [0, 153, 50],
          outlineWidth: 2,
          outlineColor: [0, 0, 0]
        }),
        ]

        // agra captivity
      case 'ACT XIII': 
        return [
          new deck.TileLayer({
            id: 'regional-satellite-layer',
            data: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
            
            // Define your boundary [minLng, minLat, maxLng, maxLat]
            // Example: The area around Asheri or Purandar
            extent: [78.010203, 27.173439, 78.033344, 27.186486], 
            // High-Resolution Settings
            tileSize: 256,
            zoomOffset: 2, // This makes the imagery 2x sharper at the same zoom
            maxZoom: 16,
            minZoom: 12,
            renderSubLayers: props => {
              const {bbox: {west, south, east, north}} = props.tile;

              return new deck.BitmapLayer(props, {
                data: null,
                image: props.data,
                bounds: [west, south, east, north],
                opacity: 0.9,
                desaturate: 0.2
              });
            }
        }),
        ]
      
      // escape from agra
      case 'ACT XV':
      case 'ACT XVI':
      case 'ACT XVII':  
      case 'ACT XVIII':
        return [
          new deck.PathLayer({
            id: 'agra-escape-route',
            data: [{ path: agraEscapePath }],
            getPath: d => d.path,
            getColor: [255, 140, 0], // Saffron/Orange for the route
            getWidth: 20,
            widthMinPixels: 4,
            capRounded: true,
            jointRounded: true,
            shadowEnabled: true, // Adds depth against the satellite image
            parameters: {
              depthTest: false // Ensures it stays visible over high-res tiles
            }
          }),
          new deck.ScatterplotLayer({
            id: 'route-stops',
            data: escape_route.features,
            getPosition: d => [d.geometry.coordinates[0], d.geometry.coordinates[1], 500],
            getFillColor: [255, 255, 255],
            getRadius: 1000,
            radiusMinPixels: 5,
            opacity: 0.5
          }),
          new deck.TextLayer({
          id: 'agra-march-text',
          data: escape_route.features,
          getPosition: d => [d.geometry.coordinates[0], d.geometry.coordinates[1] , 1000], // Slightly above the line
          getText: d => d.properties.Name,
          getSize: 12,
          getAngle: 0,
          getTextAnchor: 'middle',
          getAlignmentBaseline: 'bottom',
          getColor: [0, 153, 50],
          outlineWidth: 2,
          outlineColor: [0, 0, 0]
        }),
        ]
      default:
      return [];
  }
};

