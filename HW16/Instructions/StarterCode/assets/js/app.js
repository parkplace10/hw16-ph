// @TODO: YOUR CODE HERE!
d3.csv("/assets/data/data.csv").then(function(data) {

statesArray = []
smokesArray = []
ageArray = []

data.forEach(function(d){
    statesArray.push(d.abbr);
    smokesArray.push(d.smokes);
    ageArray.push(d.age);
})

var plots = [] 

for (var i = 0; i <= ageArray.length; i++) {
    var tuple = [ageArray[i],smokesArray[i]];
    plots.push(tuple);
};

console.log(plots)

var margin = {top: 20, right: 15, bottom: 60, left: 60}
, width = 960 - margin.left - margin.right
, height = 500 - margin.top - margin.bottom;

var x = d3.scaleLinear()
.domain([d3.min(plots, function(d) { return d[0]; }), 
    d3.max(plots, function(d) { return d[0]; })])
.range([ 0, width ]);

var y = d3.scaleLinear()
.domain([d3.min(plots, function(d) { return d[1]; }), 
    d3.max(plots, function(d) { return d[1]; })])
.range([ height, 0 ]);







});