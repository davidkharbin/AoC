var fs = require("node:fs");
function main() {
    fs.readFile("input.txt", "utf8", function (err, data) {
        if (err)
            return;
        var dataStrings = data.split("\n");
        console.log('hi');
    });
}
