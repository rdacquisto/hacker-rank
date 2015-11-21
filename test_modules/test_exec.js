(function () {
	'use strict';

	var childProcess = require('child_process');

	module.exports = {
		parseTests: function (data) {
			var tests = data.split('|||');
			return tests.map(function (test) {
				var io = test.split('===');
				return {
					input: io.shift().trim(),
					output: io.shift().trim(),
				};
			});
		},
		exec: function (script, test, callback) {
			var child = childProcess.spawn('node', [script]);
			var output = '';
			var time_start;
			var time_end;

			child.on('error', function (err) {
				callback({
					error: err
				});
			});

			child.stdout.on('data', function (data) {
				output += data;
			});

			child.on('close', function(m) {
				output = output.trim();
				if (test.output === output) {
					callback({
						status: 'success',
						success: true
					});
				} else {
					callback({
						expected: test.output,
						output: output,
						status: 'error',
						success: false
					});
				}
			});

			child.stdin.write(test.input);
			child.stdin.end();
		}
	};
})();
