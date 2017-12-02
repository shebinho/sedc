let gender = prompt("Enter your gender");
/*
if(col=="m"){
        document.body.style.backgroundColor = "green";
    }
else if(col=="male"){
        document.body.style.backgroundColor = "blue";
    }
else if(col=="f"){
        document.body.style.backgroundColor = "red";
    }
else if(col=="female"){
        document.body.style.backgroundColor = "yellow";
    }
else if(col=="other"){
        document.body.style.backgroundColor = "purple";
    }
*/

switch(gender){
    case "m" :
    case "male" :
    document.body.style.backgroundColor = "blue";
        break;
    case "f" :
    case "female" :
    document.body.style.backgroundColor = "red";
        break;
    case "other" :
    document.body.style.backgroundColor = "purple";
        break;
    default:
        break;
}


