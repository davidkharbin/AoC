export {};
const fs = require("fs");
const path = "./input.txt";

const input: string[] = fs.readFileSync(path, "utf8").split("\n");
const procedures: any = input.map((line) => {
  return line
    .split(" ")
    .filter((element: any) => !isNaN(element))
    .map((str) => Number(str));
});

interface Stack {
  [n: string]: string[];
}

// Part one (crane moves one crate at a time)
const moveBoxes = (arr: string[]) => {
  const stacks: Stack = {
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

  arr.forEach((procedure: string) => {
    let count: number = Number(procedure[0]); // this many times
    let fromStack: string = procedure[1]; // from this stack
    let toStack = procedure[2]; // to this stack:

    while (count) {
      let item: string = stacks[fromStack].pop() as string;
      stacks[toStack].push(item);
      count--;
    }
  });

  return stacks;
};

// Part two: crate moves multiple crates at once
const moveMultipleBoxes = (arr: string[]) => {
  const stacks: Stack = {
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

  arr.forEach((procedure: string) => {
    let count: number = Number(procedure[0]); // this many crates
    let fromStack: string = procedure[1]; // from this stack
    let toStack: string = procedure[2]; // to this stack:

    let crates = stacks[fromStack].slice(count);
    stacks[fromStack] = stacks[fromStack].slice(0, count);
    stacks[toStack] = [...toStack, ...crates];
  });

  return stacks;
};

const getTopCrates = (finishedStack: Stack) => {
  let topCrates: string = "";
  for (let i = 1; i <= 9; i++) {
    let lastItem = stacks[i][stacks[i].length - 1];
    topCrates += lastItem;
  }
  return topCrates;
};

const stacks = moveBoxes(procedures);

console.log(getTopCrates(stacks));
