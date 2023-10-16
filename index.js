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
  .option("-a, --action <type>", "Choose action: list, get, add, or remove")
  .option("-i, --id <type>", "User ID")
  .option("-n, --name <type>", "User name")
  .option("-e, --email <type>", "User email")
  .option("-p, --phone <type>", "User phone");

program.parse(process.argv);

const argv = program.opts();

function invokeAction({ action, id, name, email, phone }) {
  if (!action) {
    console.log(program.helpInformation());
    return;
  }

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
