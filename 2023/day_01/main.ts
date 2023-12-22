const fs = require("node:fs");
function main(): void {
  fs.readFile("input.txt", "utf8", (err: any, data: string) => {
    if (err) return;

    const dataStrings: string[] = data.split("\n");

    console.log();
    console.log(partOne(dataStrings));
  });
}

function partOne(lines: string[]): number {
  let sum: number = 0;

  const sMap = new Map();
  sMap.set(1, "one");
  sMap.set(2, "two");
  sMap.set(3, "three");
  sMap.set(4, "four");
  sMap.set(5, "five");
  sMap.set(6, "six");
  sMap.set(7, "seven");
  sMap.set(8, "eight");
  sMap.set(9, "nine");

  function checkMap(str: string, i: number) {
    for (let k: number = 0; k <= sMap.size; k++) {
      if (str.indexOf(sMap.get(k)) === i) {
        return k;
      }
    }
    return 0;
  }

  lines.forEach((line) => {
    let strNum: string = "";

    for (let i: number = 0; i < line.length; i++) {
      if (Number(line[i]) > 0) {
        strNum += line[i];
        break;
      }

      let mapNum = checkMap(line, i);
      if (mapNum > 0) {
        strNum += mapNum;
        break;
      }
    }

    for (let j: number = line.length; j >= 0; j--) {
      if (Number(line[j]) > 0) {
        strNum += line[j];
        break;
      }

      let mapNum = checkMap(line, j);
      if (mapNum > 0) {
        strNum += mapNum;
        break;
      }
    }

    let num = Number(strNum);
    sum += num;
  });

  return sum;
}

main();
