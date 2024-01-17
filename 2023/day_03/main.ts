import fs from "node:fs";

const specialCharacters: string = "@#$%&*-+=/";

function isNumeric(char: string): boolean {
  return !isNaN(Number(char));
}

function isValidPartNumber(y: number, x1: number, x2: number): boolean {

}

function main(): void {
  fs.readFile("input.data", "utf8", (err: any, data: string) => {
    const matrix: string[] = data.split("\n");
    const total: number = 0;

    for (let row: number = 0; row < matrix.length; row++) {
      for (let col: number = 0; col < matrix[row].length; col++) {
        console.log(row, col);
        if (isNumeric(matrix[row][col])) {
          let stringNum: string = matrix[row][col];
          let start: number = col;
          let end: number = col++;

          while (isNumeric(matrix[row][col])) {
            stringNum += matrix[row][col];
            end = col++;
          }
          console.log(stringNum, start, end);

          if (isValidPartNumber(row, start, end)) {
            total += Number(stringNum);
          }
        }
      }
    }
  });
}

main();
