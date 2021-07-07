let cursos = ["Java", "JavaScript", "Lógica de Programação", "POO", "HTML", "CSS"];

//Operador Spread ...
let cursosAtualizados = [...cursos, "React", "Node", "Angular"];
console.log(cursosAtualizados);

//Métodos de iteração
//Map
cursosAtualizados.map(curso => console.log(curso));

//Filter
let cursosComJ = cursosAtualizados.filter(curso => curso.charAt(0) == 'J');
console.log(cursosComJ);

console.log("---------");

//Sort
cursosAtualizados.sort();
console.log(cursosAtualizados);

//Find
let find = cursosAtualizados.find(curso => curso.charAt(0) == 'J');
console.log(find);

//Reduce
let numbers = [1, 20, 44];
let soma = numbers.reduce((valorAnterior, valorAtual) => valorAnterior + valorAtual, 0);
console.log(soma);

