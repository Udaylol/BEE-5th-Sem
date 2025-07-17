const fs = require("fs");
const {read, write} = require('../IO/io');

async function task(file1, file2, file3) {
  let user1 = await read(file1);
  let user2 = await read(file2);

  let allUsers = user1.concat(user2);

  let msg = await write(file3, JSON.stringify(allUsers));
  console.log(msg)
}

task('../users1.txt', '../users2.txt','./allUsers.txt');