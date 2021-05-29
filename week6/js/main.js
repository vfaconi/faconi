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

