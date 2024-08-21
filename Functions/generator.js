const prompt = require('prompt-sync')();
console.log("Generator Function");

function* steps(t, c, m) {
    let d = (t + c + m) / 30;
    let per = (d / 240) * 100;
    console.log("The average is = " + d);
    console.log("The percentage is = " + per);
    yield 10;  // This yields a value from the generator, but it's not necessary in this context
}

var t = parseFloat(prompt("ENTER THE MARKS OF IP="));
var c = parseFloat(prompt("ENTER THE MARKS OF CNS= "));
var m = parseFloat(prompt("ENTER THE MARKS OF ADMT= "));

const generator = steps(t, c, m);
generator.next();  // This triggers the generator to execute its code up to the first yield
