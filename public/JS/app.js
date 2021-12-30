var todoInp = document.getElementById("todoInp")
var showlist = document.getElementById("ulForTodo")

function todoapp() {
    var todotext = todoInp.value
    var todoTextNode = document.createTextNode(todotext)
    var todoLi = document.createElement('li')
    todoLi.setAttribute('class', 'listyle')
    todoLi.appendChild(todoTextNode)
    showlist.appendChild(todoLi)



    var deleteBtn = document.createElement('button')
    deleteBtn.setAttribute('onclick', 'deleteText(this)')
    var deleteTextButton = document.createTextNode('DELETE')
    deleteBtn.appendChild(deleteTextButton)
    todoLi.appendChild(deleteBtn)


    var editBtn = document.createElement('button')
    editBtn.setAttribute('onclick', 'editText(this)')
    var editTextButton = document.createTextNode('EDIT')
    editBtn.appendChild(editTextButton)
    todoLi.appendChild(editBtn)


    todoInp.value=''


}



function deleteText(element) {
    element.parentNode.remove()
}

function editText(element) {
    element.parentNode.firstChild.nodeValue = prompt('Edit Text', element.parentNode.firstChild.nodeValue)
}


function deleteAll(){
    showlist.innerHTML=" "
}