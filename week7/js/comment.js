const commentElement = document.querySelector('ul')
const inputElement = document.querySelector('input')
const buttonElement = document.querySelector('button')

const comments = JSON.parse(localStorage.getItem('list_comment')) || []

function showComment(){

    commentElement.innerHTML = " "

    for (comment of comments){
        const liElement = document.createElement('li')
        const textElement = document.createTextNode(comment)
        const inputComment = document.createElement('input')
   
     
        liElement.appendChild(inputComment)
        liElement.appendChild(textElement)
       
    }
}

showComment()

function addComment(){
    const textArea = inputElement.value
    comments.push(textArea)
    inputElement.value = " "
    showComment()
    saveLocalStorage()
}

buttonElement.setAttribute('onclick', 'addComment()')


function saveLocalStorage(){
    localStorage.setItem('list_comment', JSON.stringify(comment))
}