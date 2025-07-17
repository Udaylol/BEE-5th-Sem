const fs = require("fs");
const {write} = require('../IO/io');

let users1 = [
  {
    id: 1,
    name: "Uday",
    age: "19",
  },
  {
    id: 2,
    name: "Suchet",
    age: "20",
  },
  {
    id: 3,
    name: "Tejasav",
    age: "20",
  }
];
let users2 = [
    {
    id: 1,
    name: "Nitesh",
    age: "25",
  },
  {
    id: 2,
    name: "Ritik",
    age: "25",
  },
  {
    id: 3,
    name: "Ariv",
    age: "25",
  }
]

async function writeUsers(file, data) {
    await write(file, data);
    console.log("users written to file " + file);
}

writeUsers("../users1.txt",JSON.stringify(users1));
writeUsers("../users2.txt",JSON.stringify(users2));