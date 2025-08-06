const express = require("express");
const app = express();
const fs = require("fs");
const PORT = 4000;

app.use(express.static(__dirname + "/public"));
app.get("/users", (req,res)=>{
    fs.readFile("./users.json", "utf-8", (err,data) =>{
        if (err) return res.send(err);
        let users = JSON.parse(data);
        res.json(users);
    })
})

app.listen(PORT, ()=>{
    console.log("server started at http://localhost:" + PORT);
})