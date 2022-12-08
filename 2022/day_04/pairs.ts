export{}
const fs = require("fs");
const path = "./input.txt";

const input: string[] = fs.readFileSync(path, "utf8").split("\n");