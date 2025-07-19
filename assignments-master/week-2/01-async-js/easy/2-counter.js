// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function counter(n) {
//     for (let i = 1; i <= n; i++) {
//         process.stdout.write(`\rcounter: ${i}`)
//         await delay(1000); // wait for 1 second between counts
//     }
// }

// counter(10);

function counter(ms) {
    for(let i=1; i<=ms; i++){
        setTimeout(() => {
            process.stdout.write(`\rcounter: ${i}`)
        }, i*1000);
    }
}

counter(10);
console.log("hi");








































































// (Hint: setTimeout)