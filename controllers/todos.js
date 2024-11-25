const Todo = require('../models/Todo')

module.exports = {
    getTodos: async (req, res) => {
        try {
            const todoItems = await Todo.find()
            const itemsLeft = await Todo.countDocuments({ completed: false })

            res.render('todos.ejs', { 
                todos: todoItems,
                left: itemsLeft,
            })
        } catch (err) {
            console.error(err)
        }
    }, 
    createTodo: async (req, res) => {
        try {
            await Todo.create({ todo: req.body.todoItem, completed: false })
            
            console.log('Todo has been added')
            res.redirect('/todos')
        } catch (err) {
            console.error(err)
        }
    }, 
    markComplete: async (req, res)=>{
        try{
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{ 
                completed: true 
            })
            console.log('Marked Complete')
            res.json('Marked Complete')
        }catch(err){
            console.error(err)
        }
    }, 
    markIncomplete: async (req, res) => {
        try {
            await Todo.findOneAndUpdate({ _id: req.body.todoIdFromJSFile

             },{ 
                completed: false 
            })
            console.log('Marked as incomplete')
            res.json('Marked incomplete')
        } catch (err) {
            console.error(err)
        }
    }, 
    deleteTodo: async (req, res) => {
        console.log(req.body.todoIdFromJsFile)
        try {
            await Todo.findOneAndDelete({ _id: req.body.todoIdFromJSFile
        })
            console.log('Delete todo item')
            res.json('Deleted todo item')
        } catch (err) {
            console.error(err)
        }
    },
}