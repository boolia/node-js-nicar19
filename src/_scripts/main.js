// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

var chart = require('./_charts.js');
var L = require('leaflet');
var MiniMap = require('leaflet-minimap'); // need to load minimap before map
var map = require('./_map.js');

// weird compatibility thing btwn leaflet and yeogurt
L.Icon.Default.imagePath = 'https://unpkg.com/leaflet@1.4.0/dist/images/';
