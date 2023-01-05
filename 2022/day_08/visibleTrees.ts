import { input } from "./input";

function getVisibleTrees(trees: string[] = input) {
  let total: number = (trees.length - 2) * 2 + trees[0].length * 2;

  for (let row = 1; row < trees.length - 1; row++) {
    for (let col = 1; col < trees[row].length - 1; col++) {
      let strNum: string = trees[row][col];
      if (testLeft(trees, row, col, strNum)) {
        total++;
        continue;
      }

      if (testRight(trees, row, col, strNum)) {
        total++;
        continue;
      }

      if (testUp(trees, row, col, strNum)) {
        total++;
        continue;
      }

      if (testDown(trees, row, col, strNum)) {
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

function testUp(trees: string[], row: number, col: number, current: string) {
  let up: number = row - 1;
  while (up >= 0) {
    let next: string = trees[up][col];
    if (next >= current) {
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
    let next: string = trees[down][column];
    if (next >= sNum) {
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

function testLeft(
  trees: string[],
  row: number,
  column: number,
  current: string
) {
  let left: number = column - 1;
  while (left >= 0) {
    let next: string = trees[row][left]
    if (next >= current) {
      return false;
    }
    left--;
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

function testRight(
  trees: string[],
  row: number,
  column: number,
  current: string
) {
  let right = column + 1;
  while (right < trees[0].length) {
    let next: string = trees[row][right];
    if (next >= current) {
      return false;
    }
    right++;
  }

  return true;
}

console.log("Part One: ", getVisibleTrees(input));
console.log("Part Two: ", getScenicScore(input));
