$(document).ready(function() {
    var data = [0.8, 0, 2, 1.9, 0, 4.2, 6.1, 9.1, 3.3, 0.1, 10, 5.4, 8];

    var margin = 100;
    var svgMargin = {top: margin, right: margin, bottom: margin, left: margin};
    var svgTotalWidth = 500;
    var svgTotalHeight = 500;
    var svgWidth = svgTotalWidth - svgMargin.left - svgMargin.right;
    var svgHeight = svgTotalHeight - svgMargin.top - svgMargin.bottom;

    var svg = d3.select("#output")
        .append("svg")
        .attr("width", svgTotalWidth)
        .attr("height", svgTotalHeight)
        .append("g")
        .attr("transform", "translate(" + svgMargin.left + "," + svgMargin.top + ")");

    // var rectWidth = 100;
    // var rectHeight = 200;
    //
    // var rekt = svg.append("rect")
    //     .attr("class", "testRect")
    //     .attr("width", rectWidth)
    //     .attr("height", rectHeight)
    //     .attr("x", (svgWidth / 2) - (rectWidth / 2))
    //     .attr("y", (svgHeight / 2) - (rectHeight / 2));

    var xScale = d3.scale.linear()
		.domain([0, data.length])
		.range([0, svgWidth]);
	var yScale = d3.scale.linear()
		.domain([0, d3.max(data)])
		.range([svgHeight, 0]);

	var lineFunction = d3.svg.line()
		.x(function(d, i) {
			return xScale(i);
		})
		.y(function(d) {
			return yScale(d);
		})
		.interpolate("cardinal");

	svg.append("path")
		.attr("class", "testLine")
		.attr("d", lineFunction(data));

});
