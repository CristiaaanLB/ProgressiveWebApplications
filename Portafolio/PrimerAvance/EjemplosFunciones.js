// var prism = function(l, w, h){
//     return l * w * h
// }

// console.log(prism(3, 6, 9));

// var prisma = function(l){
//     return function(w){
//         return function(h){
//             return l * w * h
//         }
//     }
// }

// console.log(prisma(56));

// (function() {
//     console.log("I am an IIFE");
// })();

// const bar = (function(){
//     return 56;
// }());

// console.log(bar);

// var namedSum = function sum(a, b){
//     return a + b;
// }

// console.log(namedSum(1, 2));
// console.log(sum(1, 2));

var say = function say(times){
    if (times > 0){
        say = undefined;
        console.log("hello");
    }
    say(times - 1);
}

var saysay = say;

say = "Oops"

saysay(10);

function persons(p, ...msg){
    msg.forEach(arg => {
        console.log(p + " says " + arg);
    })
}
