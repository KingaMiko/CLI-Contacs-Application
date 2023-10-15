const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.join(__dirname, "./db/contacts.json");

console.log("path.join() : ", path.join(__dirname, "./db/contacts.json"));
// outputs .
console.log("path.resolve() : ", path.resolve(__dirname, "./db/contacts.json"));
// outputs current directory or equalent to __dirname of the node process
