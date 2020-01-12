document.cookie = 'cross-site-cookie=bar; SameSite=None';

// Creating map object




var map = L.map("map", {
  center: [0, 0],
  zoom: 0,
  maxZoom: 20
});



// L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=' + mapboxAccessToken, {
//     id: 'mapbox/light-v9',
//     // attribution: ...
// }).addTo(map);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


// L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
//   attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
//   maxZoom: 18,
//   id: "mapbox.streets",
//   accessToken: API_KEY
// }).addTo(map);


const GuacamoleData = document.getElementById('GuacamoleData')
// console.log(GuacamoleData)
const CountCoords = document.getElementById('CountCoord')
// console.log(CountCoords)
const CountryList = document.getElementById('CountryList')
// console.log(CountryList)
const ProduceDict = document.getElementById('ProduceDict')
// console.log(ProduceDict)
const CompositeDict = document.getElementById('CompositeDict')
// console.log(CompositeDict)
const CoordDict = document.getElementById('CoordDict')
// console.log(CompositeDict)

// console.log(CoordDict[0].Argentina);

// var polycoords = CoordDict[0].Argentina;
// var poly = L.polygon(polycoords).addTo(map);


console.log(CoordDict);
// Object.entries(CoordDict).map(([key, value]) => [key, value]);
// console.log(CoordDict.Argentina);
// console.log(Object.entries('foo'))
var Keys = [];
// Object.keys(CoordDict).map(function(key, index) {
//   myObject[key] *= 2;
// });

Object.keys(CoordDict).map(function(key, index) {
  Keys.push(key, index);
});
console.log(Keys)
// Mapping over an array of objects
// var CoordJSDictionary = CoordDict;

// var Coordinates = CoordJSDictionary.map(function(CoordJSDictionary) {
// return CoordJSDictionary[0].Argentina;
// });
// console.log(Coordinates);

// CoordDict.forEach(function(CoordDict) {
//   console.log(`${CoordDict.name}: ${CoordDict.age}`);
// });

// let CoordHelp = Object.fromEntries(
//   Object.entries(CoordDict[0]).map(([key, value]) => [key, value]);

// console.log(CoordHelp.Argentina);


// for (i=0; i <= CoordDict; i++) {
//   Coord
// }
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


// L.geoJson(CompositeDict, {style: style}).addTo(map);