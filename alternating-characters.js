// https://www.hackerrank.com/challenges/alternating-characters

'use strict';

function processData(input) {
	var lines = input.split('\n');
	var n = parseInt(lines.shift(), 10);

	while (lines.length > 0) {
		var str = lines.shift();
		var deletions = 0;

		for (var i = 1; i < str.length; i++) {
			if (str[i] === str[i - 1]) {
				deletions++;
			}
		}

		process.stdout.write('' + deletions + '\n');
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
