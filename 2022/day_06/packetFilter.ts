import { packet } from "./input";

function testChunk(chunk: string) {
  const chunkSet = new Set();

  for (const letter of chunk) {
    if (chunkSet.has(letter)) {
      return false;
    }
    chunkSet.add(letter);
  }

  return true;
}

function getMarker(packet: string, chunkLength: number) {
  for (let i = 0; i < packet.length - chunkLength; i++) {
    if (testChunk(packet.slice(i, i + chunkLength))) {
      return i + chunkLength;
    }
  }
  return 0;
}

const partOneMarker: number = getMarker(packet, 4);
const partTwoMarker: number = getMarker(packet, 14);

console.log(partOneMarker);
console.log(partTwoMarker);
