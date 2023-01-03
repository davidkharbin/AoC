import { trees } from "./input";

let total: number = (trees.length - 2) * 2 + trees[0].length * 2;

for (let row = 1; row < trees.length - 1; row++) {
  for (let column = 1; column < trees[row].length - 1; column++) {
    if (testLeft(column, trees[row])) {
      total++;
      continue;
    }

    if (testRight(column, trees[row])) {
      total++;
      continue;
    }

    if (testUp(row, column, trees[row][column])) {
      total++;
      continue;
    }

    if (testDown(row, column, trees[row][column])) {
      total++;
      continue;
    }
  }
}

console.log(total);

function testUp(row: number, column: number, sNum: string) {
  let up: number = row - 1;
  while (up >= 0) {
    if (trees[up][column] >= sNum) {
      return false;
    }
    up--;
  }

  return true;
}

function testDown(row: number, column: number, sNum: string) {
  let down: number = row + 1;
  while (down < trees.length) {
    if (trees[down][column] >= sNum) {
      return false;
    }
    down++;
  }

  return true;
}

function testLeft(column: number, s: string) {
  let l = column - 1;
  while (l >= 0) {
    if (s[l] >= s[column]) {
      return false;
    }
    l--;
  }

  return true;
}

function testRight(column: number, s: string) {
  let r = column + 1;
  while (r < s.length) {
    if (s[r] >= s[column]) {
      return false;
    }
    r++;
  }

  return true;
}
