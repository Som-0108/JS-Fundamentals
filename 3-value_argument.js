const res = Process.argv.slice(2);
const per = res[0];
if (per === undefined) { 
    console.log("No argument");
} else { 
    console.log(per);
}