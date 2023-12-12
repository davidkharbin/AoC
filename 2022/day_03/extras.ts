export{}
const fs = require("fs");
const path = "./input.txt";

const input: string[] = fs.readFileSync(path, "utf8").split("\n");

const singles: string[] = input.slice();
const groups: string[][] = getGroups(input);

let ruckSum = 0;
function add(sack: string) {
  let left: string = sack.slice(0, sack.length / 2);
  let right: string = sack.slice(sack.length / 2);

  for (let i = 0; i < left.length; i++) {
    let letter: string = left[i];
    if (right.includes(letter)) {
      if (letter === letter.toLowerCase()) {
        return (ruckSum += left.charCodeAt(i) - 96);
      } else {
        return (ruckSum += left.charCodeAt(i) - 38);
      }
    }
  }
}

let badgeSum = 0;
function getGroups(elves: string[]) {
  let groups: string[][] = [];
  for (let i = 0; i < elves.length; i += 3) {
    let group: string[] = elves.slice(i, i + 3);
    groups.push(group);
  }
  return groups;
}

function addBadge(elves: string[]) {
  for (let i = 0; i < elves[0].length; i++) {
    let letter = elves[0][i];
    if (elves[1].includes(letter) && elves[2].includes(letter)) {
      if (letter === letter.toLowerCase()) {
        return (badgeSum += letter.charCodeAt(0) - 96);
      } else {
        return (badgeSum += letter.charCodeAt(0) - 38);
      }
    }
  }
}

singles.forEach((rucksack: string) => {
  add(rucksack);
});

groups.forEach((group: string[]) => {
  addBadge(group);
});

console.log("Part One: ", ruckSum);
console.log("Part Two: ", badgeSum);
