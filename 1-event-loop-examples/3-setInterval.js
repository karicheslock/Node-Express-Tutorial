setInterval(() => {
    console.log('hello world')
}, 2000)
console.log('I will run first')
// process stays alive unless
// Kill Process CONTROL + C
// unexpected error

// setInterval is asynchronous, will continue to run every 2 seconds
// last console.log will only run once