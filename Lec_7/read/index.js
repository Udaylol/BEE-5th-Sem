const fs = require("fs");
const {read} = require('../IO/io');

async function readUsers() {
    let users1 = await read('../users1.txt');
    let users2 = await read('../users2.txt');
    console.log(users1);
    console.log(users2);

}
readUsers();