const http = require('http')

const express = require('express')

const app = express()

app.use((req,res,next) => {
    console.log("in The Middleware");
    next()
})

app.use((req,res,next) => {
    console.log("in The next  Middleware");
    res.send("<h1>Hello</h1>")
})



// const server = http.createServer(app)

// server.listen(3000)

app.listen(3000)