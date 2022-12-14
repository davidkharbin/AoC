export {};
const fs = require("fs");
const path = "./input.txt";
// const path = "./inputShort.txt";

const input: string[] = fs.readFileSync(path, "utf8").split("\n");

const procedures: number[][] = input.map((line) => {
  return line
    .split(" ")
    .filter((element: any) => !isNaN(element))
    .map((str) => Number(str));
});

interface Stack {
  [n: string]: string[];
}

// Part one (crane moves one crate at a time)
const moveBoxes = (arr: number[][]) => {
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

  arr.forEach((procedure: number[]) => {
    let count: number = Number(procedure[0]); // this many times
    let fromStack: number = procedure[1]; // from this stack
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
const moveMultipleBoxes = (arr: number[][]) => {
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
  // const stacks: Stack = {
  //   1: ["z", "n"],
  //   2: ["m", "c", "d"],
  //   3: ["p"],
  // };

  arr.forEach((procedure: number[]) => {
    let count: number = procedure[0]; // this many crates
    let fromStack: string = String(procedure[1]); // from this stack
    let toStack: string = String(procedure[2]); // to this stack:
    console.log("before", stacks);
    console.log(count, stacks[fromStack]);
    console.log(count, stacks[toStack]);

    let load = stacks[fromStack].slice(-count);
    console.log("load", load);
    while (count) {
      stacks[fromStack].pop();
      count--;
    }

    stacks[toStack] = [...stacks[toStack], ...load];
    console.log("after", stacks);
  });
  return stacks;
};

const getTopCrates = (finishedStack: Stack) => {
  let topCrates: string = "";
  for (let i = 1; i <= 9; i++) {
    let lastItem = finishedStack[i][finishedStack[i].length - 1];
    topCrates += lastItem;
  }
  return topCrates;
};

const stacks9000 = moveBoxes(procedures);
const stacks9001 = moveMultipleBoxes(procedures);

console.log(getTopCrates(stacks9000));
console.log(getTopCrates(stacks9001));
