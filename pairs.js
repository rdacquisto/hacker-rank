// https://www.hackerrank.com/challenges/pairs

'use strict';

function runTestCase(N, K, set, dict) {
	var count = 0;

	set.forEach(function (item) {
		if (dict[item + K]) {
			count++;
		}
	});

	process.stdout.write('' + count + '\n');
}

function processData(input) {
	var lines = input.split('\n');
	var NK = lines.shift().split(' ');
	var N = parseInt(NK.shift(), 10);
	var K = parseInt(NK.shift(), 10);
	var dict = {};
	var set = lines.shift().split(' ').map(function (element) {
		var item = parseInt(element, 10);
		dict[item] = true;
		return item;
	});

	runTestCase(N, K, set, dict);
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
