
console.log("Before the function declaration");

function pecati(){
    console.log("Inside the function");
    console.log("Inside the function second line");
}

function zbir(a,b){
    console.log(a+b);
}

function mnozi(a,b=4){
    //console.log(arguments);
    return a*b;
}

console.log("After the function declaration");

//pecati();
//pecati();
//pecati();
//pecati();

zbir(2,3);  //a=2 b=3
zbir(4,5);
zbir(254,343535);

let x = mnozi(3,2);
let resultDiv = document.getElementById("result");
//resultDiv.innerHTML ="Rezultatot od mnozenjeto na 3 i 2 e <b>"+x+"</b>";
resultDiv.innerHTML =`Rezultatot od mnozenjeto na 3 i 2 e <b>${mnozi(mnozi(5,6) ,x)}</b>`;
mnozi(4,null);

function simpleFunction (){
    var foo= 600;
    console.log(foo);
}


simpleFunction();
console.log(foo);