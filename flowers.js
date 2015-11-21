// https://www.hackerrank.com/challenges/flowers

'use strict';

function runTestCase(N, K, c) {
	var count = 0;
	var people = [];

	c.sort(function (a, b) {return b - a;});

	c.forEach(function (item) {
		var index = count % K;
		if (!people[index]) {
			people[index] = [];
		}

		people[index].push((people[index].length + 1) * item);
		count++;
	});

	var cost = 0;
	people.forEach(function (element) {
		cost += element.reduce(function (previousValue, currentValue) {
			return previousValue + currentValue;
		});
	});

	process.stdout.write('' + cost + '\n');
}

function processData(input) {
	var lines = input.split('\n');
	var NK = lines.shift().split(' ');
	var N = parseInt(NK.shift(), 10);
	var K = parseInt(NK.shift(), 10);
	var c = lines.shift().split(' ').map(Number);

	runTestCase(N, K, c);
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
