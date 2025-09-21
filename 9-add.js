const args = process.argv.slice(2);
const b = parseInt(args[0]);
const d = parseInt(args[1]);
function add(b, d) {
    return b + d;
}
console.log(add(b, d));