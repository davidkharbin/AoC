const fs = require('fs')
const path = './input.txt'

const input = fs.readFileSync(path, 'utf8').split('\n')

const singles = input.slice()
const groups = getGroups(input)

let ruckSum = 0
function add(sack) {
	let left = sack.slice(0, sack.length / 2)
	let right = sack.slice(sack.length / 2)

	for (let i = 0; i < left.length; i++) {
		let letter = left[i]
		if (right.includes(letter)) {

			if (letter === letter.toLowerCase()) {
				return ruckSum += left.charCodeAt(i) - 96
			} else {
				return ruckSum += left.charCodeAt(i) - 38
			}
		}
	}
}

let badgeSum = 0
function getGroups(elves) {
	let groups = []
	for (let i = 0; i < elves.length; i += 3) {
		groups.push(elves.slice(i, i + 3))
	}
	return groups
}

function addBadge(elves) {
	for (let i = 0; i < elves[0].length; i++) {
		let letter = elves[0][i]
		if (elves[1].includes(letter) && elves[2].includes(letter)) {

			if (letter === letter.toLowerCase()) {
				return badgeSum += letter.charCodeAt(0) - 96
			} else {
				return badgeSum += letter.charCodeAt(0) - 38
			}
		}
	}
}

singles.forEach(rucksack => {
	add(rucksack)
})

groups.forEach(group => {
	addBadge(group)
})

console.log('Part One: ', ruckSum);
console.log('Part Two: ', badgeSum);