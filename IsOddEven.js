const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let data=[];  

rl.on("line", function(line) {   
	data.push(line);
	rl.close();   
}).on("close", function() {
	solution(data);
	process.exit();
});

const solution = (data) => {
 return data%2 == 0 ? console.log('even') : console.log('odd');
};