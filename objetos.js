// let pessoa = {
//     nome: "Yolanda",
//     idade: 32,
//     altura: 1.69,
//     peso: 80.0
// }

// //Desestruturar um objeto:
// let {nome, idade, altura, peso} = pessoa;
// console.log(nome);
// console.log(idade);


let livros = [
    {
        id: 1,
        nome: "Senhor dos Anéis",
        paginas: 1030
    },
    {
        id: 2,
        nome: "Clean Code",
        paginas: 200
    },
    {
        id: 3,
        nome: "Maria Bonita",
        paginas: 100
    },
    {
        id: 4,
        nome: "Sapiens",
        paginas: 550
    },
];

let [{id, nome, paginas}] = livros;
console.log(id);
console.log(nome);
console.log(paginas);

livros.map(livro => console.log(livro.nome));

