(function a(){


function celTofar(cel){
    return cel*1.8+32;
}
function farTocel(fahr){
    return (5/9)* (fahr-32);
}

// console.log(celTofar(66));
// console.log(farTocel(32));

let cel = 100;
let far = celTofar(cel);
var b = celTofar(cel)
console.log("This is b "+b);
console.log("Celsius: first time" + farTocel(b));
console.log("Celsius: " + farTocel(celTofar(cel)));

let a = 1;
a = 1;})
();