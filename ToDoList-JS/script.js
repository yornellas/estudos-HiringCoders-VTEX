let form = document.querySelector(".containerForm");
let newItemInput = document.querySelector("#itemInput");
let listContainer = document.querySelector("#list");
//console.log(listContainer); --> Para testar se selecionou o item certo

let listItems = [];

form.addEventListener('submit', function(ev){ //recebe 2 parâmetros: o tipo de evento a ser vigiado e a função a ser excutada (anônima) pra esse evento
    ev.preventDefault();   //previne o recarregamento da pág toda vez que submeter o form

    let item = newItemInput.value;
    if(item === null || item === '') return;
    let list = createList(item);

    newItemInput.value = ""; //limpar o campo de input

    listItems.push(list);

    render(); 
});

function createList(name) {
    return { 
        id: Date.now().toString(),
        name: name
    }
}

function clearElements(element) { //limpa a lista para não ficar repetindo elementos toda vez que der um submit
    while(element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

function render() { //para mostrar os itens na tela
    clearElements(listContainer);
    listItems.forEach(function(list){
        let newElement = document.createElement('li');
        newElement.classList.add('listItems'); //adiciona uma classe ao elemento criado
        newElement.innerText = list.name;

        listContainer.appendChild(newElement); 
    })
}



