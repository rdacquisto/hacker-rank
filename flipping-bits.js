// https://www.hackerrank.com/challenges/flipping-bits

function processData(input) {
    var lines = input.split('\n');
	var n = parseInt(lines.shift(), 10);

	while (lines.length > 0) {
		var integer = parseInt(lines.shift(), 10);
		var flip = (~integer) >>> 0;
		process.stdout.write('' + flip + '\n');
	}
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
