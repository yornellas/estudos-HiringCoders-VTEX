//Operador ternário
function verifyAge(age) {
 return age >= 18 ? "Maior de idade" : "Menor de idade"
}

let result = verifyAge(27);
console.log(result);


//Arrow Functions
let soma = (a, b) => a + b;
console.log(soma(3, 2));

let sayHello = name => `Hello, ${name}!`;
console.log(sayHello("Yolanda"));