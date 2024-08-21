const prompt = require('prompt-sync')();
//default function 
console.log ("Default Function")
 function SI (P,R,N =3) {     
    var A = (P*R*N)/100     
    console.log("The simple interest by default parameter= "+A) }
// SI (1000,8,3)
let P = prompt ("ENTER THE PRINCIPAL=");
let R = prompt ("ENTER THE RATE OF INTEREST");
let N = prompt ("ENTER THE YEARS= ");
SI(P,R,N)