const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 3000;

app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "./public/index.html");
});

app.post("/public/signup", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  const userData = {
    username,
    password,
  };

  fs.readFile("./users.json", "utf8", (err, data) => {
    let database = [];

    if (!err && data) {
      database = JSON.parse(data);
    }

    let userExists = database.find((obj) => {
      return userData.username.toLowerCase() === obj.username.toLowerCase();
    });

    if (userExists) {
      console.log("User already exists");
      res.send("User already exists");
      return;
    }

    database.push(userData);

    fs.writeFile("./users.json", JSON.stringify(database), (err) => {
      if (err) {
        return res.status(500).send("Failed to write");
      }
      res.send("User added successfully");
    });
  });
});

app.post("/public/login", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  const userData = {
    username,
    password,
  };

  fs.readFile("./users.json", "utf8", (err, data) => {
    let database = [];

    if (!err && data) {
      database = JSON.parse(data);
    }

    let userExists = database.find((obj) => {
      return (
        obj.username === userData.username.toLowerCase() &&
        obj.password === userData.password
      );
    });
    if (userExists) {
      console.log("Login Successful");
      return res.send(`Login successful`);
    }
    console.log("User not found");
    res.send("User not found");
  });
});

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
