console.log("Hello, World!");

const myLastName = "Martins Faria Ornellas";

console.log("---------------------");

//Objeto
let person = {
    "name": "Yolanda",
    "lastName": "Martins Faria Ornellas",
    "age": 32,
    "height": 1.69,
    "weight": 80.0
};

console.log(person);

console.log("---------------------");

//typeof
let object;
console.log("1: " +typeof object);

object = null;
console.log("2: " +typeof object);

object = 32;
console.log("3: " +typeof object);

console.log("---------------------");

//incremento
let num = 2;
num++;
console.log(num);

console.log("---------------------");

//estruturas de repetição
let i = 0;
do {
    console.log(i);
    i++;
} while(i <= 10);

console.log("---------------------");

//Classes
class Person {
    constructor(name, lastName, age) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }

    presentYourself() {
        console.log(`Eu me chamo ${this.name} ${this.lastName} e tenho ${this.age} anos.`);
    }
}

let me = new Person();
me.name = "Yolanda";
me.lastName = "Ornellas";
me.age = 32;
me.presentYourself();

//Herança
class ProfessionalPerson extends Person {
    constructor(name, lastName, age, profession) {
        super(name, lastName, age);
        this.profession = profession;
    }

    presentYourself() {
        console.log(`Eu me chamo ${this.name} ${this.lastName} e tenho ${this.age} anos e sou ${this.profession}.`);
    }
}

let newMe = new ProfessionalPerson("Yolanda", "Ornellas", 32, "Java Backend Developer");
newMe.presentYourself();

console.log("---------------------");

//Encapsulamento:
class Book {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }
}

let book = new Book("Clean Code");
console.log(book.name);
