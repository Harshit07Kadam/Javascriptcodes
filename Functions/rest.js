const prompt = require('prompt-sync')();
function simple (...theArgs) {
    let [P,R,N] = theArgs;
    let A = (P*R*N)/100;
    console.log("THE SIMPLE INTEREST BY REST PARAMETER FUNCTION IS ="+A )
}
let P = prompt ("ENTER THE PRINCIPAL=");
let R = prompt ("ENTER THE RATE OF INTEREST");
let N = prompt ("ENTER THE YEARS= ");
simple(P,R,N);
