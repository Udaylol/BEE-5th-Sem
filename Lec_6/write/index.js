const fs = require("fs");

fs.writeFile("../demo1.txt", "hello world", function(err) {
    if (err) return console.log(err)
        console.log("success from demo1.txt");
})