const express = require("express")
const cors = require("cors")
const mysql = require("mysql")
const app = express()

app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:"practise_auth",
})

app.get("/", (req, res)=>{
    res.send("hi, i am listening")
})

app.listen(3000, ()=> console.log("listening.."))