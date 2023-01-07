const express = require("express")
const app = express()


app.get("/", (req, res)=>{

    res.send("Welcome To my Node App");
})

app.get("/testNode", (req, res)=>{

    res.status(200).send("Yes testNode endpoint worked")
})

module.exports = app;