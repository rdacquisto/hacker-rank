// https://www.hackerrank.com/challenges/cavity-map/submissions/code/15486431

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n = parseInt(readLine());
    var grid = [];
    var cavities =[];

    for (var grid_i = 0; grid_i < n; grid_i++){
       grid[grid_i] = readLine().split('').map(Number);
    }

    grid.forEach(function(row, row_index) {
        if (row_index === 0 || row_index === n - 1) {
            return;
        }

        row.forEach(function (column, column_index) {
            if (column_index === 0 || column_index === n - 1) {
                return;
            }

            if (row[column_index-1] >= column || row[column_index+1] >= column) {
                return;
            }

            if (grid[row_index-1][column_index] >= column || grid[row_index+1][column_index] >= column) {
                return;
            }

            cavities.push([row_index, column_index]);

        });
    });


    cavities.forEach(function(cavity) {
        grid[cavity[0]][cavity[1]] = 'X';
    });



    grid.forEach(function(item) {
        console.log(item.join(''));
    });


}

