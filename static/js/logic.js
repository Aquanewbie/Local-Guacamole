document.cookie = 'cross-site-cookie=bar; SameSite=None';

//Variables From Python 
// const GuacamoleData = document.getElementById('GuacamoleData').value
// console.log(GuacamoleData)
const CountCoord = document.getElementById('CountCoord').getAttribute('value');
// console.log(CountCoord)
const CountryList = document.getElementById('CountryList').getAttribute('value');
// console.log(CountryList)
const ProduceDict = document.getElementById('ProduceDict').getAttribute('value');
// console.log(ProduceDict)
const CompositeDict = document.getElementById('CompositeDict').getAttribute('value');
// String.raw(CompositeDict)

var CompositeDict_js = JSON.parse(CompositeDict);
console.log(CompositeDict_js);
// const CoordDict = document.getElementById('CoordDict')
// console.log(CompositeDict)

// Create empty arrays to store necessary values for upcoming plots
var Country = [];
var Produce = [];
var Coordinates = [];
// Iterate through CompositeDict_js and push all the values into their respective arrays
CompositeDict_js.forEach((data) => {
    Object.entries(data).forEach(([key, value]) => {
        if (key === "Country") {
            Country.push(value);
        }
        else if (key === "Produce") {
            Produce.push(value);
        }
        else if (key === "Coordinates") {
            Coordinates.push(value);
        }
    });
});

// Creating map object
var map = L.map("map", {
  center: [22.8515625,
    27.68352808378776],
  zoom: 2,
  maxZoom: 20
});

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var marker = L.marker([51.5, -0.09]).addTo(map);

// var indexworking = [2,3,4,5,6,8,9,10,12,12,13,14,15,16,17,18,19,21,23,24,25,26,27,29,30,31,32,33,34,35,36,38,39,41,42,43,44,45,46,47,48,49,52,53,54];
var indexworking = [2,3,6,8,9]
  // ,10,12,12,13,14,15,16,17,18,19,21,23,24,25,26,27,29,30,31,32,33,34,35,36,38,39,41,42,43,44,45,46,47,48,49,52,53,54];
var indexnotworking = [0,1,6,7,20,22,28,37,40,50,51,4,5];

var states = [];
var i;
for (i = 0; i <= indexworking.length; i++) {
  states.push({
    "type": "Feature",
    "properties": {"produce": Country[indexworking[i]], "country": Country[indexworking[i]]},
    "geometry": {
        "type": "Polygon",
        "coordinates": Coordinates[indexworking[i]]}
    });
}

var imageurl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWfN5Vgv6tZ_gC0bLC0lgbqjHvdj7sT7Rvj0SGy34w8tKdaue2bw&s"
L.geoJSON(states, {
  style: function(feature) {
      switch (feature.properties.produce) {
          case "['Avocados', 'Cilantro', 'Garlic', 'Limes', 'Onions', 'Tomatoes']": return {color: "#ff0000"};
          case 'Democrat':   return {color: "#0000ff"};
      }
  }
}).addTo(map);

// 111111



// var countriesmap= [{
//   "type": "Feature",
//   "properties": {"Produce": Produce[1]},
//   "geometry": {"type": "Polygon", "coordinates": Coordinates[1]}}, {
//   "type": "Feature",
//   "properties": {"Produce": Produce[2]},
//   "geometry": {"type": "Polygon", "coordinates": Coordinates[2]}}, {
//   "type": "Feature",
//   "properties": {"Produce": Produce[3]},
//   "geometry": {"type": "Polygon", "coordinates": Coordinates[3]}}];

// L.geoJSON(countriesmap, {
//   style: function(feature) {
//       switch (feature.properties.Produce) {
//           case '["Avocados", "Cilantro", "Limes", "Onions", "Tomatoes"]': return {color: "#ff0000"};
//           // case 'Democrat':   return {color: "#0000ff"};
//           // case 'Democrat':   return {color: "#0000ff"};
//       }
//   }
// }).addTo(map);

// var Coordinatesflip = turf.flip(Coordinates[0])
// console.log(Coordinatesflip)

// var polygon = L.polygon(Coordinates[0], {color: "#ff7800", weight: 5}).addTo(map);
// var polygon = L.polygon(Coordinatesflip, {color: "#ff7800", weight: 5}).addTo(map);

// var polygon = L.polygon(Coordinates[0], {color: "#ff7800", weight: 5})
// var flippolygon = turf.flip(polygon).addTo(map);
// var polygon1 = L.polygon(Coordinates[1], {color: "#ff7800", weight: 5}).addTo(map);
// var polygon2 = L.polygon(Coordinates[2], {color: "#ff7800", weight: 5}).addTo(map);
// var polygon3 = L.polygon(Coordinates[3], {color: "#ff7800", weight: 5}).addTo(map);
// var polygon4 = L.polygon(Coordinates[4], {color: "#ff7800", weight: 5}).addTo(map);
// var polygon5 = L.polygon(Coordinates[5], {color: "#ff7800", weight: 5}).addTo(map);
// var polygon6 = L.polygon(Coordinates[6], {color: "#ff7800", weight: 5}).addTo(map);
// var polygon8 = L.polygon(Coordinates[7], {color: "#ff7800", weight: 5}).addTo(map);

marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
polygon.bindPopup("I am a polygon.");

var popup = L.popup()
    .setLatLng([51.5, -0.09])
    .setContent("I am a standalone popup.")
    .openOn(map);
// Alert________________________________________________
// function onMapClick(e) {
//   alert("You clicked the map at " + e.latlng);
//   }
  
// mymap.on('click', onMapClick);

// var popup = L.popup();
// Popup________________________________________________
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);


// L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
//   attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
//   maxZoom: 18,
//   id: "mapbox.streets",
//   accessToken: API_KEY
// }).addTo(map);






// var poly = L.polygon(polycoords).addTo(map);


function style(feature) {
  return {
      fillColor: getColor(feature.properties.density),
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7
  };
}
// Make the Country highlighted visually when they are hovered with a mouse
function highlightFeature(e) {
  var layer = e.target;

  layer.setStyle({
      weight: 5,
      color: '#666',
      dashArray: '',
      fillOpacity: 0.7
  });

  if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
      layer.bringToFront();
  }
}

// L.geoJson(CompositeDict, {style: style}).addTo(map);