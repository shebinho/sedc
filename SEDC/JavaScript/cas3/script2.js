let resultDiv = document.getElementById("result");
let shoppingList = []; //empty array
let toDos = ["write javascript homework", "go out with John"];
let student = ["John", "Doe", ["javascript","php"],1980 ];

resultDiv.innerText = toDos;

console.log(toDos[0]);
toDos[0] = "Forget JavaScript, It's Saturday";

console.log(toDos[0]);

console.log("toDos length " + toDos.length);

toDos[ toDos.length ] = "relax";

console.log("toDos length " + toDos.length);

shoppingList.push("bread", "eggs", "milk");

console.log(shoppingList);
student[2].push("math");
console.log(student[2][2]);
student.unshift("art");
console.log(student[0]);

let studentYearofBirth = student.pop();
console.log(student);



