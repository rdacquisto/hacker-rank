// https://www.hackerrank.com/challenges/string-reduction

function runTest(line) {
	var result = 1;

	var array = line.split('');
	line = array.sort().join('');
	if (line[0] === line[line.length-1]) {
		result = line.length;
	} else {
		var a = array.reduce(function(n, val) {
	    	return n + (val === 'a');
		}, 0);
		var b = array.reduce(function(n, val) {
	    	return n + (val === 'b');
		}, 0);
		var c = array.reduce(function(n, val) {
	    	return n + (val === 'c');
		}, 0);

		if (a % 2 === b % 2 && b % 2 === c % 2) {
			result = 2;
		}
	}
	console.log(result);
}

function processData(input) {
	var lines = input.split('\n');
    var tests = Number(lines.shift());

    for (var i = 0; i < tests; i++) {
    	runTest(lines.shift());
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

