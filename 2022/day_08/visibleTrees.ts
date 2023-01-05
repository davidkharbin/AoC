import { input } from "./input";

// const input: string[] = [
//   "30373",
//   "25512", 
//   "65332",
//   "33549",
//   "35390"];

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

function getScenicScore(trees: string[] = input) {
  let highest = 0;

  for (let row = 0; row < trees.length; row++) {
    for (let col = 0; col < trees[row].length; col++) {
      let up: number, down: number, left: number, right: number;
      let strNum: string = trees[row][col];

      up = getUpScene(trees, row, col, strNum);
      down = getDownScene(trees, row, col, strNum);
      left = getLeftScene(trees, row, col, strNum);
      right = getRightScene(trees, row, col, strNum);
      console.log('row: ', row, '\n', 'col: ', col)
      console.log('strNum: ', strNum, up, down, left, right);
      let total: number = up * down * left * right;
      if (total > highest) highest = total;
    }
  }
  return highest;
}

function getUpScene(
  trees: string[],
  row: number,
  col: number,
  current: string
) {
  let count: number = 0;
  let up: number = row - 1;
  while (up >= 0) {
    let next: string = trees[up][col];
    if (next < current) {
      count++;
    }

    if (next >= current) {
      count++;
      return count;
    }
    up--;
  }

  return count || 1;
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


function getDownScene(
  trees: string[],
  row: number,
  col: number,
  current: string
) {
  let count: number = 0;
  let down: number = row + 1;
  while (down < trees.length) {
    let next: string = trees[down][col];
    if (next < current) {
      count++;
    }

    if (next >= current) {
      count++;
      return count;
    }

    down++;
  }

  return count || 1;
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


function getLeftScene(
  trees: string[],
  row: number,
  col: number,
  current: string
) {
  let left: number = col - 1;
  let count: number = 0;
  while (left >= 0) {
    let next: string = trees[row][left];
    if (next < current) {
      count++;
    }

    if (next >= current) {
      count++;
      return count;
    }

    left--;
  }

  return count || 1;
}

function testLeft(trees: string[], column: number, s: string) {
  let l: number = column - 1;
  while (l >= 0) {
    if (s[l] >= s[column]) {
      return false;
    }
    l--;
  }

  return true;
}


function getRightScene(
  trees: string[],
  row: number,
  col: number,
  current: string
) {
  let right: number = col + 1;
  let count: number = 0;
  while (right < trees[0].length) {
    let next: string = trees[row][right];
    if (next < current) {
      count++;
    }

    if (next >= current) {
      count++;
      return count;
    }

    right++;
  }

  return count || 1;
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
console.log("Part Two: ", getScenicScore(input));
