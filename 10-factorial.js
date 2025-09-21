const arg = process.argv[2];
const n = parseInt(arg);
function factorial(num) {
    if (isNaN(num) || num <= 1) {
        return 1;
    }
    return num * factorial(num -1);
}
console.log(factorial(n));