// https://www.hackerrank.com/challenges/largest-rectangle

function getMaxArea(array) {
	var stack = [];

	var max_area = 0;
	var tp;
	var area_with_top;

	var i = 0;
	while (i < array.length) {
		if (stack.length === 0 || array[stack[stack.length-1]] <= array[i]) {
			stack.push(i++);
		} else {
			tp = stack.pop();
			area_with_top = array[tp] * (stack.length === 0 ? i : i - stack[stack.length-1] - 1);

			if (max_area < area_with_top)
				max_area = area_with_top;
		}
	}

	while (stack.length > 0) {
		tp = stack.pop();

		area_with_top = array[tp] * (stack.length === 0 ? i : i - stack[stack.length-1] - 1);

		if (max_area < area_with_top)
			max_area = area_with_top;
	}

	return max_area;
}

function processData(input) {
	var lines = input.split('\n');
	var N = Number(lines.shift());
	var array = lines.shift().split(' ').map(Number);

	console.log(getMaxArea(array));
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
