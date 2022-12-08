export {}

const fs = require('fs');

const file = fs.readFileSync('./input.txt', 'utf8').split('\n\n')

const input: number[][] = file.map((elf: string) => {
	let nums: number[] = []
	elf.split('\n').forEach((str: string) => nums.push(Number(str)))
	return nums
})

const sortedSums: number[] = (input
	.map((elf: number[]) => elf.reduce((a:number, b:number) => a + b))
	.sort((a:number, b:number) => b - a)
)

const max = sortedSums[0]
const topThree = sortedSums[0] + sortedSums[1] + sortedSums[2]

console.log(max, topThree);
