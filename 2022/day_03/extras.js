var fs = require("fs");
var path = "./input.txt";
var input = fs.readFileSync(path, "utf8").split("\n");
console.log('object');
var singles = input.slice();
var groups = getGroups(input);
var ruckSum = 0;
function add(sack) {
    var left = sack.slice(0, sack.length / 2);
    var right = sack.slice(sack.length / 2);
    for (var i = 0; i < left.length; i++) {
        var letter = left[i];
        if (right.includes(letter)) {
            if (letter === letter.toLowerCase()) {
                return (ruckSum += left.charCodeAt(i) - 96);
            }
            else {
                return (ruckSum += left.charCodeAt(i) - 38);
            }
        }
    }
}
var badgeSum = 0;
function getGroups(elves) {
    console.log(elves);
    var groups = [""];
    for (var i = 0; i < elves.length; i += 3) {
        var elf = elves.slice(i, i + 3);
        groups.push(elf);
    }
    return groups;
}
function addBadge(elves) {
    for (var i = 0; i < elves[0].length; i++) {
        var letter = elves[0][i];
        if (elves[1].includes(letter) && elves[2].includes(letter)) {
            if (letter === letter.toLowerCase()) {
                return (badgeSum += letter.charCodeAt(0) - 96);
            }
            else {
                return (badgeSum += letter.charCodeAt(0) - 38);
            }
        }
    }
}
singles.forEach(function (rucksack) {
    add(rucksack);
});
groups.forEach(function (group) {
    addBadge(group);
});
console.log("Part One: ", ruckSum);
console.log("Part Two: ", badgeSum);
