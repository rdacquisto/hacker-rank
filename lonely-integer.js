// https://www.hackerrank.com/challenges/lonely-integer

'use strict';

function processData(input) {
	var lines = input.split('\n');
	var n = parseInt(lines.shift(), 10);

	var integers = lines.shift().split(' ');
	var result = integers[0];

	for (var i = 1; i < integers.length; i++) {
		result ^= integers[i];
	}

	process.stdout.write('' + result + '\n');
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
