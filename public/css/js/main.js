const deleteBtn = document.querySelector('.del')
const todoItem = document.querySelector('span.not')
const todoComplete = document.querySelectorAll('span.completed')

//! Event Listeners

// Mark Complete listener
Array.from(todoItem).forEach(el => {
    el.addEventListener('click', markComplete)
})
// Mark incomplete listener
Array.from(todoComplete).forEach(el => {
    el.addEventListener('click', markIncomplete)
})
// Delete todo item listener
Array.from(deleteBtn).forEach(el => {
    el.addEventListener('click', deleteTodo)
})

// ! Functions

// Mark complete
async function markComplete(){
    const todoId = this.parentNode.dataset.id

    try {
        const res = await fetch('todos/deleteTodo', {
            method: 'delete',
            headers: { 'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })

        const data = await res.json()
        console.log(data)
        location.reload()

    } catch (err) {
        console.log(err)
    }
}

// Mark incomplete
async function markIncomplete(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/markIncomplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

// Delete item
async function deleteTodo(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/deleteTodo', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}  //ANCHOR not working