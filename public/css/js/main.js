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

async function deleteTodo(){
    const toId = this.parentNode.dataset.id

    try {
        const res = await fetch('todos/deleteTodo', {
            method: 'delete',
            headers: { 'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJsFile': todoId
            })
        })

        const data = await res.json()
        console.log(data)
        location.reload()

    } catch (err) {
        console.log(err)
    }
}