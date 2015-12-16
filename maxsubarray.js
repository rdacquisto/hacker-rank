// https://www.hackerrank.com/challenges/maxsubarray

'use strict';

function runTest(array) {
	var max_ending_here = array[0];
	var max_so_far = array[0];
	var max_total = array[0];

	array.forEach(function (item, index) {
		if (index === 0) {
			return;
		}
		max_ending_here = Math.max(item, max_ending_here + item);
        max_so_far = Math.max(max_so_far, max_ending_here);

        if (max_total < 0) {
        	max_total = Math.max(max_total, item);
        } else if (item > 0) {
        	max_total += item;
        }
	});

	console.log(max_so_far, max_total);

}

function processData(input) {
	var lines = input.split('\n');
	var T = Number(lines.shift());

	for (var i = 0; i < T; i++) {
		var N = Number(lines.shift());
		var array = lines.shift().split(' ').map(Number);
		runTest(array);
	}
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
var _input = '';
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
