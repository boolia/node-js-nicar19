var d3 = require('d3');

// prevents clipping
var margin = {top: 20, right: 20, bottom:20, left:40};

var container = d3.select('#county-homicides');
var containerWidth = container.node().offsetWidth;
var containerHeight = containerWidth * 0.66;

var chartWidth = containerWidth - margin.right - margin.left;
var chartHeight = containerHeight - margin.top - margin.bottom;

var svg = container.append('svg')
				.attr('width', containerWidth)
				.attr('height', containerHeight)
				.append('g')
				    .attr('transform', `translate(${margin.left}, ${margin.top})`)
;

