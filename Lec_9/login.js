const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.post("/data", (req, res) => {
  const { userMail, userPass } = req.body;

  const recievedData = {
    userMail,
    userPass,
  };

  fs.readFile('./file.txt', "utf8", (err, data) => {
    let arr = [];

    if (!err && data) {
      arr = JSON.parse(data);
    }

    for (let i = 0; i < arr.length; i++) {
        if (recievedData.userMail == arr[i].userMail && recievedData.userPass == arr[i].userPass) {
            console.log("Login Successful");
            res.send(`Login successful`);
            return;
        } 
    }
    console.log("User not found");
    res.send("User not found");
  });
});

app.listen(PORT, () => {
  console.log(`Server started at https://localhost:${PORT}`);
});