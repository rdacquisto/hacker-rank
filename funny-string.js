// https://www.hackerrank.com/challenges/funny-string

'use strict';

function testLine (str) {
	var len = str.length;
	var rev = str.split('').reverse().join('');

	for (var i = 1; i < len - 1 ; i ++) {
		var si = str.charCodeAt(i);
		var si1 = str.charCodeAt(i - 1);
		var ri = rev.charCodeAt(i);
		var ri1 = rev.charCodeAt(i -1);

		if ( Math.abs(si - si1) !== Math.abs(ri - ri1) ) {
			return false;
		}
	}

	return true;
}

function processData(input) {
	var lines = input.split('\n');
	var n = parseInt(lines.shift(), 10);

	while (lines.length > 0) {
		var str = lines.shift();

		if (!testLine(str)) {
			process.stdout.write("Not ");
		}
		process.stdout.write("Funny\n");
	};
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
