const fs = require("node:fs");

function main(): void {
  fs.readFile("input.data", "utf8", (err: any, data: string) => {
    if (err) return;

    const matrix: string[] = data.split("\n");

		console.log(matrix)
		
  });
}

main();
