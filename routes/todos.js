const express = require('express')
const router = express.Router()
const todosController = require('../controllers/todos')

//@desc Go to todos page
// GET /
router.get('/', todosController.getTodos)

//@desc Go to todos page
// POST /createTodo
router.post('/createTodo', todosController.createTodo)

//@desc Update todo item as complete
// PUT /markComplete
router.put('/markComplete', todosController.markComplete)

//@desc Update todo item as incompelte
// PUT /markIncomplete
router.put('/markIncomplete', todosController.markIncomplete)

//@desc Delete todo item
// DELETE /deleteTodo
router.delete('/deleteTodo', todosController.deleteTodo)

module.exports = router