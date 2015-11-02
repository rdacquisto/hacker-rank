// https://www.hackerrank.com/challenges/cipher

'use strict';

function processData(input) {
	var lines = input.split('\n');
	var integers = lines.shift().split(' ');

	var n = parseInt(integers[0], 10);
	var k = parseInt(integers[1], 10);

	var encoded = lines.shift();
	var result = [];
	var result_xors = [];

	result[0] = parseInt(encoded[0], 10);
	result_xors[0] = result[0];

	for (var i = 1; i < n-1; i++) {
		var target = parseInt(encoded[i], 10);
		var test = result_xors[i - 1];

		// Remove previous xors that are no longer part of the test.
		if (i >= k) {
			test ^= result[i - k];
		}

		result[i] = (target == test ^ 0) ? 0 : 1;
		result_xors[i] = result[i] ^ test;
	}

	result[n-1] = parseInt(encoded[encoded.length -1], 10);

	process.stdout.write('' + result.join('') + '\n');
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
