import fs from "node:fs";

const specialCharacters: string = "@#$%&*-+=/";

function isNumeric(char: string): boolean {
  return !isNaN(Number(char));
}

function isValidPartNumber(str: string): boolean {
  for (let i: number = 0; i < str.length; i++) {
    if (specialCharacters.includes(str[i])) {
      return true;
    }
  }
  return false;
}

function main(): void {
  fs.readFile("input.data", "utf8", (err: any, data: string) => {
    const matrix: string[] = data.split("\n");
    let total: number = 0;

    // the first and last rows and the first and last elements have been added for padding
    // (removing the requirement to check for undefined neighbors)
    for (let row: number = 1; row < matrix.length; row++) {
      for (let col: number = 1; col < matrix[row].length - 1; col++) {
        if (isNumeric(matrix[row][col])) {
          let stringNum: string = matrix[row][col];
          let start: number = col;
          let end: number = col++;

          while (isNumeric(matrix[row][col])) {
            stringNum += matrix[row][col];
            end = col++;
          }

          const charsAbove: string = matrix[row - 1].slice(start - 1, end + 2);
          const charsBelow: string = matrix[row + 1].slice(start - 1, end + 2);
          const rightChar: string = matrix[row][start - 1];
          const leftChar: string = matrix[row][end + 1];
          const neighbors: string =
            leftChar + rightChar + charsAbove + charsBelow;

          if (isValidPartNumber(neighbors)) {
            total += Number(stringNum);
          }
        }
      }
    }
    console.log(total);
  });
}

main();
