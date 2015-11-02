// https://www.hackerrank.com/challenges/the-time-in-words

var ones=['','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','one']; // Hours 1-12 plus 1 for [hour+1] #hacky
var teens=['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];

function minutesString (minutes) {
	var minutes_word = (minutes === 1) ? ' minute' : ' minutes';
	var minutes_value = '';
	if (minutes < 10) {
		minutes_value = ones[minutes];
	} else if (minutes < 20) {
		minutes_value = teens[minutes % 10];
	} else {
		minutes_value = 'twenty ' + ones[minutes % 20];
	}
	return minutes_value + minutes_word;
}

function processData(input) {
	var lines = input.split('\n');
    var h = parseInt(lines[0], 10);
    var m = parseInt(lines[1], 10);

    var result = '';
    switch (m) {
    	case 0:
    		result = ones[h] + ' o\' clock';
    		break;
    	case 15:
    		result = 'quarter past ' + ones[h];
    		break;
    	case 30:
    		result = 'half past ' + ones[h];
    		break;
    	case 45:
    		result = 'quarter to ' + ones[h + 1];
    		break;
    	default:
    		if (m < 30) {
    			var minutes = minutesString(m);
    			result = minutes + ' past ' + ones[h];
    		} else {
    			var minutes = minutesString(60 - m);
    			result = minutes + ' to ' + ones[h + 1];
    		}
    		break;
    }

    process.stdout.write(result + '\n');
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
