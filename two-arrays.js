// https://www.hackerrank.com/challenges/two-arrays

function processData(input) {
	var lines = input.split('\n');
    var tests = Number(lines.shift());

    for (var i = 0; i < tests; i++) {
    	var n_k = lines.shift().split(' ').map(Number);
    	var n = n_k[0];
    	var k = n_k[1];

    	var a = lines.shift().split(' ').map(Number).sort(function(a,b){return a-b;});
		var b = lines.shift().split(' ').map(Number).sort(function(a,b){return b-a;});
		var success = 'YES';

		for (var j = 0; j < n; j++) {
			if (b[j] + a[j] < k) {
				success = 'NO';
				break;
			}
		}
		console.log(success);
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

