const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

app.post("/user", (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("email is" + email);
    console.log("password is" + password);
    res.json({
      success: true,
      message: "user addes successfully",
      data: {
        email,
        password,
      },
    });
  } catch (error) {
    res.json({
      success: false,
      message: "failed to add user",
    });
  }
});

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});
