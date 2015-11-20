// https://www.hackerrank.com/challenges/find-digits

'use strict';

function processData(input) {
    //Enter your code here
    var lines = input.split('\n');

    var test_cases = parseInt(lines.shift(), 10);

    for (var i = 0; i < test_cases; i++) {
    	var N_string = lines.shift();
    	var N = parseInt(N_string);

    	var count = 0;
    	N_string.split('').forEach(function (item) {
    		var digit = parseInt(item, 10);
    		if (digit > 0) {
    			if (N % digit === 0) {
    				count++;
    			}
    		}
    	});

    	process.stdout.write('' + count + '\n');
    }
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
