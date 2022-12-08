const fs = require('fs')
const path = './input.txt'
const input = fs
	.readFileSync(path, 'utf8') .split('\n') .map((line) => line.split(' '))

////////////////////////////////////////////////////////////////
/**
 * Part One
 */
////////////////////////////////////////////////////////////////
const points = {
	X: 1, Y: 2, Z: 3,

	AX: 3, AY: 6, AZ: 0,

	BX: 0, BY: 3, BZ: 6,

	CX: 6, CY: 0, CZ: 3
}

const getScore = (plays) => {

	let opponentPoint = plays[0]
	let myPoint = plays[1]
	let winnerScore = `${opponentPoint}${myPoint}`

	return points[winnerScore] + points[myPoint]
}


const sum = (rounds) => {
	let total = 0
	rounds.forEach(round => {
		total += getScore(round)
	})

	return total
}

////////////////////////////////////////////////////////////////
/**
 * Part Two
 */
////////////////////////////////////////////////////////////////

const decrypt = (rounds) => {
	rounds.forEach(round => {
		// Lose
		if (round[0] === 'A' && round[1] === 'X') return round[1] = 'Z'
		if (round[0] === 'C' && round[1] === 'X') return round[1] = 'Y'

		// Draw
		if (round[0] === 'A' && round[1] === 'Y') return round[1] = 'X'
		if (round[0] === 'C' && round[1] === 'Y') return round[1] = 'Z'

		// Win
		if (round[0] === 'A' && round[1] === 'Z') return round[1] = 'Y'
		if (round[0] === 'C' && round[1] === 'Z') return round[1] = 'X'
	})
	return rounds
}

console.log('Part one: ', sum(input))
console.log('Part two: ', sum(decrypt(input)))