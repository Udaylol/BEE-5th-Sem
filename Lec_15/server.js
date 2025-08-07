const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile("./public/index.html");
});

app.post("/adduser", (req, res) => {
  try {
    let { username, password } = req.body;
    let newUser = {
      username,
      password,
    };
    console.log("username is: " + username);
    console.log("password is: " + password);
    res.json({
      success: true,
      data: newUser,
      message: "user added successfully",
    });
  }
  catch (err) {
    res.json({
      success: false,
      err: "failed to add user",
    });
  }
});

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});
