const X = 'X';
const arg = process.argv.slice(2);
const first = arg[0];
const number = parseInt(first);
if (!isNaN(number) && number > 0) { 
    for (let i = 0; i < number; i++) {
        console.log(X.repeat(number));
    }
} else {
    console.log("Missing size");
}