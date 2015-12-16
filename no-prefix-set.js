// https://www.hackerrank.com/challenges/no-prefix-set

var Trie = function () {
	this.tree = {};
};

Trie.prototype.insert = function(string) {
	var current = this.tree;
	string.split('').forEach(function (letter, index) {
		if (!current[letter]) {
			if (string.length - 1 === index) {
				current[letter] = 'X';
			} else {
				current[letter] = {};
			}
		}
		current = current[letter];
	});
};
Trie.prototype.hasPrefix = function(string) {
	var current = this.tree;

	for (var i = 0; i < string.length; i++) {
		var letter = string[i];

		// If current letter doesn't exists, path doesn't exist.
		if (!current[letter]) {
			return false;
		}

		// Found matching prefix
		if (current[letter] === 'X') {
			return true;
		}

		current = current[letter];
	}

	// This is a prefix of an existing string.
	return true;
};

function processData(input) {
	var lines = input.split('\n');
    var N = Number(lines.shift());

    var trie = new Trie();

    for (var i = 0; i < lines.length; i++) {
    	var line = lines[i];
    	if (trie.hasPrefix(line)) {
			console.log('BAD SET');
			console.log(line);
			return;
    	}

    	trie.insert(line);
    };

    console.log('GOOD SET');
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
