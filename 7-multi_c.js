let C = "C is fun";
const args = process.argv.slice(2);
const number = parseInt(args);
if (!isNaN(number)) {
    for (let i =0; i < number; i++){
       console.log(C);
    }
  } else {
    console.log ("Missing number of occurrences");
    }