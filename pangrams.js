// https://www.hackerrank.com/challenges/pangrams

'use strict';

function processData(input) {
    input = input.toLowerCase();

    // All letters in alphabet, sort of ordered by commonality.
    var alphabet = 'zqxvwybcdfghjklmnprstaeiou'.split('');

    for (var i = 0; i < alphabet.length; i++) {
    	if (input.indexOf(alphabet[i]) === -1) {
    		process.stdout.write("not ");
    		break;
    	}
    }
    process.stdout.write("pangram\n");
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
