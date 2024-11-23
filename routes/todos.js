const express = require('express')
const router = express.Router()
const todosController = require('../controllers/todos')

//@desc Go to todos page
// GET /
router.get('/', todosController.getTodos)

//@desc Go to todos page
// POST /createTodo
router.post('/createTodo', todosController.createTodo)



module.exports = router