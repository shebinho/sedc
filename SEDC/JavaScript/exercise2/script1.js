(function (){
    let score = 100;
    console.log("Before if statement");
    if(score > 100){
        console.log("Max points earned");
    }
    else if(score > 60){
        console.log("You are not among the best, but you've passed")
    }
    else{
        console.log("You failed!");
    }

    console.log("After if statements");

})();