export {};
const fs = require("fs");
const path = "./input.txt";

const input: string[] = fs.readFileSync(path, "utf8").split("\n");

const pairs: string[][][] = input.map((element) => {
  let ar = element.split(",");
  let a = ar[0].split("-");
  let b = ar[1].split("-");
  return [a, b];
});

let overlappedRanges: number = 0;
let overlappedPairs: number = 0;

pairs.forEach((pair) => {
  let A1: number = Number(pair[0][0]);
  let B1: number = Number(pair[1][0]);
  let A2: number = Number(pair[0][1]);
  let B2: number = Number(pair[1][1]);

  if (A1 >= B1 && A2 <= B2) return [overlappedRanges++, overlappedPairs++];
  if (B1 >= A1 && B2 <= A2) return [overlappedRanges++, overlappedPairs++];

  if (A1 >= B1 && A1 <= B2) return overlappedPairs++;
  if (A2 >= B1 && A2 <= B2) return overlappedPairs++;
});

// Part 1
console.log("Ranges", overlappedRanges);
// Part 2
console.log("Pairs", overlappedPairs);
