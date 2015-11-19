// https://www.hackerrank.com/challenges/the-quickest-way-up
'use strict';

function bfs (G, s) {
    var i, Q = [],
        u, v;

    G[s].color = 'grey';
    G[s].distance = 0;
    G[s].parent = null;

    Q.push(s);

    while (Q.length > 0) {
        u = Q.shift();
        for (i = 0; i < G[u].possibleMoves.length; i += 1) {
            v = G[u].possibleMoves[i];
            if (G[v].color === 'white') {
                G[v].color = 'grey';
                G[v].distance = G[u].distance + 1;
                G[v].parent = u;
                Q.push(v);
            }
        }
        G[u].color = 'black';
    }
}


function processTestCase (ladders, snakes) {
	var board = [];
	for (var i = 1; i <= 100; i++) {
		board[i] = {
			color: 'white',
			possibleMoves: [],
			square: i,
	        distance: -1,
	        parent: null
		};

		for (var j = i + 1; j <= i + 6; j++) {
			if (j > 100) {
				break;
			}

			if (typeof ladders[j] !== 'undefined') {
				board[i].possibleMoves.push(ladders[j]);
			} else if (typeof snakes[j] !== 'undefined') {
				board[i].possibleMoves.push(snakes[j]);
			} else {
				board[i].possibleMoves.push(j);
			}
		}
	}

	bfs(board, 1);
	var moves = board[100].distance;
	process.stdout.write('' + moves + '\n');
}

function processData (input) {
	var lines = input.split('\n');
	var n = parseInt(lines.shift(), 10);
	var i;

	for (var test_cases = 0; test_cases < n; test_cases++) {
		var ladder_count = parseInt(lines.shift());
		var ladders = [];

		for (i = 0; i < ladder_count; i++) {
			var ladder = lines.shift().split(' ');
			ladders[ladder[0]] = parseInt(ladder[1]);
		}

		var snake_count = parseInt(lines.shift());
		var snakes = [];

		for (i = 0; i < snake_count; i++) {
			var snake = lines.shift().split(' ');
			snakes[snake[0]] = parseInt(snake[1], 10);
		}

		processTestCase(ladders, snakes);
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
