var d = 123;
var b = "HEEELLO!";
var c = true;
document.write(d, b, c,);
console.log(d, b, c);
//bool
let a = true;
console.log(a);
let p = document.getElementById("print");
p.innerText = "Value of b is "+a;

let z =`Lorem ipsum ${a} dolor sit amet consectetur adipisicing elit. Inventore ea voluptate nihil consectetur incidunt quis fugiat explicabo. Molestias qui ipsa tenetur aspernatur, soluta molestiae quae vel quisquam in. Blanditiis, inventore`

p.innerText = z;

let screenX = 1440;
let screenY = 900;
let elementX = 100;
let elementY = 50;

let centerX = screenX/2 - elementX/2;
let centerY = screenY/2 - elementY/2;

var price = 64;
var perKm = 5.7/100;
var distance = 168;
var result1 = perKm * distance * price
console.log("Price  of perKM "+result1);
