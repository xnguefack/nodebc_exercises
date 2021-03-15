// Using the console show odd numbers from 1 to 1000

function listOdd(num) {
    for (let i = 1; i < num; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}
listOdd(1000);