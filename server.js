const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const app = express();

app.use(cors());


const db = mysql.createConnection({
  
    user: "root",
    host: "localhost",
    port: 3307,
    password: "",
    database: "fogado"


})

app.get("/",(req,res) =>{
    res.send("Működik a szerver") 
  })

  
app.get("/fogado",(req,res)=> {
   const sql = "SELECT * FROM szobak"
   db.query(sql, (err, result) =>{
     if(err) return res.json(err)
     return res.json(result)
   })
})
app.get("/fogado2",(req,res)=> {
    const sql = "SELECT * FROM szobak WHERE szobak.szazon > 3"
    db.query(sql, (err, result) =>{
      if(err) return res.json(err)
      return res.json(result)
    })
 })


app.listen(3008,(req,res) =>{
    console.log("A szerver a 3008-as porton fut")
})
