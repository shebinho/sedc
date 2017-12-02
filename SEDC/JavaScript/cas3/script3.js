let i = 0;

while (i < 10 ){
    console.log("Hello");
    i++
}

do{
    console.log("Hello Class");
}while(i > 20);

let toDos = ["write javascript homework", "go out with John", "relax"];
i = 0;
while(i <toDos.length){
    console.log(toDos[i]);
    i += 2; //every second element
}

while(true){
    let value = prompt("Vnesi broj");

    if(value == "end"){
        break;
    }
}

for(let k = 0; k < toDos.length; k++){
    console.log(toDos[k]);
}

let max = -Infinity;
for(let k = 10; k > 0; k--){
    let value = Number(prompt("Vnesi vrednost"));

    if(Number.isNaN(value)){
        // value = -Infinity;
        continue; //go to next iteration
    }
    
    if (value > max ){
        max = value;
    }
}

