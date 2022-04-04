const { readFileSync, writeFileSync } = require('fs');
console.log('start');
const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

console.log(first, second)

//  Note that this will overwrite the file if it already exists
writeFileSync('./content/result-sync.txt', `Here is the result : ${first}, ${second}`)

// To append, add 'a' flag
writeFileSync('./content/result-sync.txt', `Here is the result : ${first}, ${second}`, { flag: 'a' })

console.log('done with this task');
console.log('starting the next one');