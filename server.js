// Variables
const express = require('express')
const app = express()
const connectDB = require('./config/db')
const homeRoutes = require('./routes/home')
// const todoRoutes = require('./routes/todos')
const PORT = process.env.PORT || 4000
const dotenv = require('dotenv')
dotenv.config({ path: './config/.env' })

// Connect to our database
connectDB()

// Use EJS as template engine
app.set('view engine', 'ejs')

// Middleware
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Routes
app.use('/', homeRoutes)
// app.use('/todos', toDoRoutes)

// Listen for our port
app.listen(PORT, () => {
    try {
        console.log(`Server is running on port ${PORT}, go catch it! 🏃🏾‍♀️`)
    } catch (err) {
        console.error(err)
    }
})