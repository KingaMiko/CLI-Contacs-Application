const { Command } = require("commander");
const contacts = require("./contacts");

const program = new Command();

program
  .addHelpText(
    "after",
    `
    Available Commands:
    -------------------
    list         List all contacts
    get <id>     Get a contact by ID
    add <name> <email> <phone>   Add a new contact
    remove <id>  Remove a contact by ID
    `
  )
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      contacts.listContacts();
      break;

    case "get":
      contacts.getContactById(id);
      break;

    case "add":
      contacts.addContact(name, email, phone);
      break;

    case "remove":
      contacts.removeContact(id);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
