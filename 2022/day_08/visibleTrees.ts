import { input } from "./input";

function getVisibleTrees(trees: string[] = input) {
  let total: number = (trees.length - 2) * 2 + trees[0].length * 2;

  for (let row = 1; row < trees.length - 1; row++) {
    for (let column = 1; column < trees[row].length - 1; column++) {
      if (testLeft(trees, column, trees[row])) {
        total++;
        continue;
      }

      if (testRight(trees, column, trees[row])) {
        total++;
        continue;
      }

      if (testUp(trees, row, column, trees[row][column])) {
        total++;
        continue;
      }

      if (testDown(trees, row, column, trees[row][column])) {
        total++;
        continue;
      }
    }
  }
  return total;
}

function testUp(trees: string[], row: number, column: number, sNum: string) {
  let up: number = row - 1;
  while (up >= 0) {
    if (trees[up][column] >= sNum) {
      return false;
    }
    up--;
  }

  return true;
}

function testDown(trees: string[], row: number, column: number, sNum: string) {
  let down: number = row + 1;
  while (down < trees.length) {
    if (trees[down][column] >= sNum) {
      return false;
    }
    down++;
  }

  return true;
}

function testLeft(trees: string[], column: number, s: string) {
  let l = column - 1;
  while (l >= 0) {
    if (s[l] >= s[column]) {
      return false;
    }
    l--;
  }

  return true;
}

function testRight(trees: string[], column: number, s: string) {
  let r = column + 1;
  while (r < s.length) {
    if (s[r] >= s[column]) {
      return false;
    }
    r++;
  }

  return true;
}

console.log("Part One: ", getVisibleTrees(input));
