// https://www.hackerrank.com/challenges/bfsshortreach

'use strict';
function runTestCase(graph, S) {
	var root = graph[S];

	root.visited = true;
	root.distance = 0;

	var queue = [S];

	while (queue.length > 0) {
		var node = graph[queue.shift()];

		node.edges.forEach(function (e) {
			var edge = graph[e];

			if (!edge.visited) {
				edge.visited = true;
				edge.distance = node.distance + 6;
				queue.push(e);
			}
		});
	}

	var results = graph.map(function (element) {
		return element.distance;
	});

	results.splice(S, 1);

	process.stdout.write(results.join(' '));
	process.stdout.write('\n');
}

function prepTestCase (lines) {
    var N_M = lines.shift().split(' ').map(Number);
	var N = N_M.shift();
	var M = N_M.shift();

	var graph = Array.apply(null, Array(N)).map(function (element, index) {
		return {
			distance: -1,
			edges: []
		};
	});

	// Chaning this from lines.shift to .splice made this significantly faster.
	lines.splice(0, M).forEach(function (edge) {
		var x_y = edge.split(' ').map(Number);
		var x = x_y[0] - 1;
		var y = x_y[1] - 1;

		if (graph[x].edges.indexOf(y) === -1)
			graph[x].edges.push(y);

		if (graph[y].edges.indexOf(x) === -1)
			graph[y].edges.push(x);
	});

	var S = parseInt(lines.shift(), 10) - 1;

	runTestCase(graph, S);
}

function processData(input) {
    var lines = input.split('\n');

    var test_cases = parseInt(lines.shift(), 10);
    Array.apply(null, Array(test_cases)).forEach(function () {
    	prepTestCase(lines);
    });
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
var _input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
