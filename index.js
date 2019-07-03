document.querySelector('form').addEventListener('submit', addTodo)


function addTodo(e) {
    e.preventDefault()
    const newLi = document.createElement('li')
    newLi.innerText = document.getElementById('item').value
    newLi.addEventListener('click', completeTodo)

    const removeButton = document.createElement('button')
    removeButton.innerText = 'x'
    removeButton.addEventListener('click', removeTodo)
    newLi.append(removeButton)

    const list = document.querySelector('ul')
    list.appendChild(newLi)
}

function removeTodo(e) {
    event.target.parentNode.remove()
}

function completeTodo(e) {
    const attr = event.target.getAttribute('aria-checked')
    if (attr !== 'true') {
        event.target.setAttribute('aria-checked', 'true')
    } else {
       event.target.setAttribute('aria-checked', 'false')
    }
}