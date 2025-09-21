const args = Process.argv.slice(2);
const result = args[0];
const number = parseInt(result);
if (!isNaN(number)) {
    console.log(`My number: ${number}`);
    else {
        console.log("Not a number");