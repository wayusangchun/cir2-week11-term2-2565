const dotenv = require('dotenv')
const express = require('express')
const app = express()
const path  = require('path')

//set path to .env
dotenv.config({path:'./.env'})

const PORT = process.env.PORT || 4000;

//Home page
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname + '/pages/home.html'))
})
//About page
app.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname + '/pages/about.html'))
})
//Blog page
app.get('/blog',(req,res)=>{
    res.sendFile(path.join(__dirname + '/pages/blog.html'))
})
//404 Page
app.use((req,res,next)=>{
    res.status(404)
    res.sendFile(path.join(__dirname + '/pages/missing.html'))
})

app.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`)
})