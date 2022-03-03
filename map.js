var map = L.map("map", {
  center: [52.51281891416161, 13.38923196153867],
  zoom: 13,
 
  minZoom: 13,
});

var marker = L.marker([52.51281891418662, 13.389221317200835]).addTo(map);
var circle = L.circle([52.51281891418662, 13.389221317200835], {
    color: '#f6d86a',
    fillColor: 'rgb(246, 216, 106, 0.4)',
    fillOpacity: 0.5,
    radius: 50
}).addTo(map);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);
