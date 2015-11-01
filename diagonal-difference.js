// https://www.hackerrank.com/challenges/diagonal-difference

process.stdin.resume();
process.stdin.setEncoding('ascii');

var __input_stdin = "";
var __input_stdin_array = "";
var __input_currentline = 0;

process.stdin.on('data', function (data) {
    __input_stdin += data;
});

process.stdin.on('end', function () {
    __input_stdin_array = __input_stdin.split("\n");
    var res;
    var n = parseInt(__input_stdin_array[__input_currentline].trim(), 10);
    var arr = [];
    var a = 0, b = 0;

    __input_currentline += 1;
    for (var i = 0; i<n;i++) {
       var _line = __input_stdin_array[__input_currentline].trim();
       __input_currentline += 1;
        var arr = _line.split(" ");
        a += parseInt(arr[i]);
        b += parseInt(arr[(n-1) - i]);
    }
    res = Math.abs(a - b);
    process.stdout.write(""+res+"\n");
});
