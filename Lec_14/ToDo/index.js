const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 5000;

app.get('/todo', (req,res)=>{
    
})

app.listen(PORT, ()=>{
    console.log(`server started at http://localhost:${PORT}`);
})