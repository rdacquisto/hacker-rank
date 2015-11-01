'use strict';

function growth (cycle, height) {
	if (cycle % 2 == 0) {
		return height + 1;
	} else {
		return 2 * height;
	}
}

function processData(input) {
	var parse_fun = function (s) {
		return parseInt(s, 10);
	};

	var lines = input.split('\n');
	var T = parse_fun(lines.shift());

	var data = lines.splice(0, T).map(parse_fun);

	for (var i = 0; i < T; i++) {
		var res = 0;
		var cycles = data[i];

		for (var j = 0; j <= cycles; j++) {
			res = growth (j, res);
		}
		process.stdout.write(""+res+"\n");
	}
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
var _input = "";
process.stdin.on("data", function (input) { _input += input; });
process.stdin.on("end", function () { processData(_input); });
