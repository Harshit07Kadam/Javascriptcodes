const prompt = require('prompt-sync')();
let show = function (P,R,N) {
    console.log ("THE SIMPLE INTEREST BY ANONYMOUS FUNCTION IS = " + (P*R*N)/100)
};
let P = prompt ("ENTER THE PRINCIPAL=");
let R = prompt ("ENTER THE RATE OF INTEREST");
let N = prompt ("ENTER THE YEARS= ");
show(P,R,N);
