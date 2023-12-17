const fs = require("node:fs");

fs.readFile("input.txt", "utf8", (err: any, data: string) => {
  if (err) return;

  const dataStrings: string[] = data.split("\n");
  let sum: number = 0;

  dataStrings.forEach((line) => {
    let strNum: string = "";

    for (let i: number = 0; i < line.length; i++) {
      if (Number(line[i]) >= 0) {
        strNum += line[i];
        break;
      }
    }
    
    for (let j: number = line.length; j >= 0; j--) {
      if (Number(line[j]) >= 0) {
        strNum += line[j];
        break;
      }
    }

    sum+=Number(strNum);
  });

  console.log("SUM: ", sum);
  return sum;
});
