import { readFile } from 'node:fs/promises';

const data = await getData();
const pairs = getPairs(data);
const sum = getSum(pairs[0], pairs[1])
console.log('sum: ', sum);

async function getData() {
  try {
    const list = await readFile('./data', 'utf8');
    return list.split('\n');
  } catch (err) {
    return err;
  }
}

function getPairs(data) {
  const left = [];
  const right = [];

  data.forEach(pair => {
    pair = pair.split(' ');
    left.push(pair[0])
    right.push(pair.at(-1))
  });

  return [left.sort(), right.sort()];
}

function getSum(arrL, arrR) {
  console.log('arrL', arrL);
  console.log('arrR', arrR);
  let sum = 0;
  for (let i = 0; i < arrL.length; i++) {
    const numL = parseInt(arrL[i]);
    const numR = parseInt(arrR[i]);
    sum = sum + Math.abs(numL - numR);
  }
  return sum;
}
