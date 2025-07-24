const fs = require("fs");
const { read , write , append} = require("./IO/io.js");

const [, , targetUser, targetItem] = process.argv;

async function buyProduct(userName, itemName) {
    
  let users = await read("./textFiles/users.txt");
  let items = await read("./textFiles/items.txt");

  let user = users.find((u) => u.user_name === userName.toLowerCase());
  let item = items.find((i) => i.item_name === itemName.toLowerCase());

  if (!user) {
    return console.log("user not found!");
  }
  if (!item) {
    return console.log("item not found!");
  }
  logPurchases('./textFiles/orderHistory.txt', user, item);
}

async function logPurchases(file, user, item) {
  let data=[]
  data.push({user,item});
  console.log(data)
  await write(file, JSON.stringify(data));
}

buyProduct(targetUser, targetItem);