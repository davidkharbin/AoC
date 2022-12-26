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

function getMarker(packet: string) {
  for (let i = 0; i < packet.length - 3; i++) {
    if (testChunk(packet.slice(i, i + 4))) {
      return i + 4;
    }
  }
  return 0;
}

const marker: number = getMarker(packet);

// Part one:
console.log(marker);
