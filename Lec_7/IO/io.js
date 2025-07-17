const fs = require("fs");

function read(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, "utf-8", (err, data) => {
      if (err) return reject(err);
      let users = JSON.parse(data);
      resolve(users);
    });
  });
}

function write(file, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      if (err) return reject(err);
      resolve("Users written");
    });
  });
}

module.exports.read = read;
module.exports.write = write;
