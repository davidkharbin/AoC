const fs = require("node:fs");

function main(): void {
  fs.readFile("input.txt", "utf8", (err: any, data: string) => {
    if (err) return;

    const games: string[] = data.split("\n");

    const possibilities = getPossibilities(games);
    const sumOfPowers = getSumOfPowers(games);
  });
}

function isValidGame(game: string[]) {
  const thresholds: Record<string, number> = { red: 12, green: 13, blue: 14 };

  for (let j: number = 0; j < game.length; j++) {
    const pair: string[] = game[j].split(" ");
    const key: string = pair[0];
    const value: number = Number(pair[1]);

    if (thresholds[key] < value) {
      return false;
    }
  }
  return true;
}

function formatGames(strings: string[]) {
  let results: string[][] = [];

  for (let i: number = 0; i < strings.length; i++) {
    const pairs: string[] = strings[i].split(": ").slice(1)[0].split(/;|,/);
    for (let j: number = 0; j < pairs.length; j++) {
      pairs[j] = pairs[j].trim().split(" ").reverse().join(" ");
    }

    results.push(pairs);
  }
  console.log(results);
  return results;
}

function getPossibilities(games: string[]) {
  let total = 0;

  const formattedGames: string[][] = formatGames(games);
  for (let i: number = 0; i < formattedGames.length; i++) {
    if (isValidGame(formattedGames[i])) {
      total += i + 1;
    }
  }
  return total;
}

function getSumOfPowers(games: string[]) {
  let sum: number = 0;

  const formattedGames: string[][] = formatGames(games);
  for (let i: number = 0; i < formattedGames.length; i++) {
    let totals: Record<string, number> = { red: 1, green: 1, blue: 1 };

    for (let j: number = 0; j < formattedGames[i].length; j++) {
      const pair: string[] = formattedGames[i][j].split(" ");

      if (Number(pair[1]) > totals[pair[0]]) {
        totals[pair[0]] = Number(pair[1]);
      }
    }
    sum += totals.red * totals.green * totals.blue;
  }

  return sum;
}

main();
