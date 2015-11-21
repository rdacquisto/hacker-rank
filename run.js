(function () {
	'use strict';

	var test_exec = require('./test_modules/test_exec');
	var fs = require('fs');
	var args = process.argv.slice(2);

	if (args.length < 1) {
		console.error('No script specified to run');
		return process.exit(1);
	}

	var file_script = args.shift();
	var file_test = 'test/' + file_script.substr(0, file_script.indexOf('.')) + '.test';

	fs.readFile(file_test, function (er, data) {
		if (er) throw er;

		var tests = test_exec.parseTests(data.toString());

		tests.forEach(function (test) {
			test_exec.exec(file_script, test, function (results) {
				console.log(JSON.stringify(results, null, 4));
			});
		});
	});

})();
