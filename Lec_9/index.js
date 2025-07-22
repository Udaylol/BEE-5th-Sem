const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.post("/data", (req, res) => {
  const { userName, userMail, userPass } = req.body;

  const userData = {
    userName,
    userMail,
    userPass,
  };

  fs.readFile('./file.txt', "utf8", (err, data) => {
    let arr = [];

    if (!err && data) {
      arr = JSON.parse(data);
    }

    arr.push(userData);

    fs.writeFile('./file.txt', JSON.stringify(arr, null, 2), (err) => {
      if (err) {
        return res.status(500).send("Failed to write");
      }
      res.send({
        message: "POST Request received",
        yourName: userName,
        yourMail: userMail,
        yourPass: userPass,
      });
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server started at https://localhost:${PORT}`);
});