const fs = require("fs");
const path = "./input.txt";

const input = fs.readFileSync(path, "utf8").split("\n");

const moves = input.map((line) => {
	return line.split(" ").filter(element => !isNaN(element)).map(str => Number(str));
});

console.log(moves);
// console.log(input);

let stacks = {
	1: ["F", "C", "P", "G", "Q", "R"],
	2: ["W", "T", "C", "P"],
	3: ["B", "H", "P", "M", "C"],
	4: ["L", "T", "Q", "S", "M", "P", "R"],
	5: ["P", "H", "J", "Z", "V", "G", "N"],
	6: ["D", "P", "J"],
	7: ["L", "G", "P", "Z", "F", "J", "T", "R"],
	8: ["N", "L", "H", "C", "F", "P", "T", "J"],
	9: ["G", "V", "Z", "Q", "H", "T", "C", "W"],
};
