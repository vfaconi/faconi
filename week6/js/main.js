const listElement = document.querySelector('ul')
const inputElement = document.querySelector('input')
const buttonElement = document.querySelector('button')

const tasks = JSON.parse(localStorage.getItem('list_task')) || []

function showTask(){

    listElement.innerHTML = " "

    for (task of tasks){
        const taskElement = document.createElement('li')
        const textElement = document.createTextNode(task)
        const linkElement = document.createElement('a')
        const pos = tasks.indexOf(task)
        const linkText = document.createTextNode('X')
        const inputElement = document.createElement('input')
        inputElement.type = 'checkbox';
        //taskElement.innerHTML=`<input type="checkbox">`
        
        linkElement.setAttribute('href', '#')
        linkElement.setAttribute('onclick', `deleteTask(${pos})`)
        

        taskElement.appendChild(inputElement)
        taskElement.appendChild(textElement)
        listElement.appendChild(taskElement)
        linkElement.appendChild(linkText)
        taskElement.appendChild(linkElement)
      
        
    }
}

showTask()

function addTask(){
    const textArea = inputElement.value
    tasks.push(textArea)
    inputElement.value = " "
    showTask()
    saveLocalStorage()
}

buttonElement.setAttribute('onclick', 'addTask()')

function deleteTask(pos){
    tasks.splice(pos, 1)
    showTask()
    saveLocalStorage()
}

function saveLocalStorage(){
    localStorage.setItem('list_task', JSON.stringify(tasks))
}

/*'use strict';

let banco = [];

const getBanco = () => JSON.parse(localStorage.getItem ('todoList')) ?? [];
const setBanco = (banco) => localStorage.setItem ('todoList', JSON.stringify(banco));

const createItem = (task, status, index) => {
    const item = document.createElement('label');
    item.classList.add('todo__item');
    item.innerHTML = `
        <input type="checkbox" ${status} data-indice=${indice}>
        <div>${tarefa}</div>
        <input type="button" value="X" data-indice=${indice}>
    `;
    document.getElementById('todoList').appendChild(item);
}

const limparTarefas = () => {
    const todoList = document.getElementById('todoList');
    while (todoList.firstChild) {
        todoList.removeChild(todoList.lastChild);
    }
}

const atualizarTela = () => {
    limparTarefas();
    const banco = getBanco(); 
    banco.forEach ( (item, indice) => criarItem (item.tarefa, item.status, indice));
}

const inserirItem = (evento) => {
    const tecla = evento.key;
    const texto = evento.target.value;
    if (tecla === 'Enter'){
        const banco = getBanco();
        banco.push ({'tarefa': texto, 'status': ''});
        setBanco(banco);
        atualizarTela();
        evento.target.value = '';
    }
}

const removerItem = (indice) => {
    const banco = getBanco();
    banco.splice (indice, 1);
    setBanco(banco);
    atualizarTela();
}

const atualizarItem = (indice) => {
    const banco = getBanco();
    banco[indice].status = banco[indice].status === '' ? 'checked' : '';
    setBanco(banco);
    atualizarTela();
}

const clickItem = (evento) => {
    const elemento = evento.target;
    console.log (elemento.type);
    if (elemento.type === 'button') {
        const indice = elemento.dataset.indice;
        removerItem (indice);
    }else if (elemento.type === 'checkbox') {
        const indice = elemento.dataset.indice;
        atualizarItem (indice);
    }
}

document.getElementById('newItem').addEventListener('keypress', inserirItem);
document.getElementById('todoList').addEventListener('click', clickItem);

atualizarTela();*/





