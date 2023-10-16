import { promises as fs } from "fs";
import readline from "readline";
import path from "path";
const contactsPath = path.join(process.cwd(), "./db/contacts.json");
import { v4 as uuidv4 } from "uuid";

async function saveContact(path, data) {
  try {
    await fs.writeFile(path, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error("Error saving contact:", error);
    throw error;
  }
}

async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);
    console.table(contacts);
    return contacts;
  } catch (error) {
    console.error("Error reading contacts:", error);
    throw error;
  }
}

async function getContactById(contactId) {
  try {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);
    const contact = contacts.find((c) => c.id === contactId);
    if (contact) {
      console.table([
        {
          id: contact.id,
          name: contact.name,
          email: contact.email,
          phone: contact.phone,
        },
      ]);
    } else {
      console.log("Contact not found");
    }
    return contact;
  } catch (error) {
    console.error("Error getting contact by ID:", error);
    throw error;
  }
}

async function removeContact(contactId) {
  try {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);
    const updatedContacts = contacts.filter((c) => c.id !== contactId);

    await saveContact(contactsPath, updatedContacts);
    console.log("Contact removed");

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question(
      "Do you want to display the updated list? (y/n): ",
      async (answer) => {
        rl.close();
        if (answer.toLowerCase() === "y") {
          console.table(updatedContacts);
        }
      }
    );
  } catch (error) {
    console.error("Error removing contact:", error);
    throw error;
  }
}

async function addContact(name, email, phone) {
  try {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);
    const newContact = {
      id: uuidv4(),
      name,
      email,
      phone,
    };
    contacts.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    console.log("Contact added");

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question(
      "Do you want to display the updated list? (y/n): ",
      async (answer) => {
        rl.close();
        if (answer.toLowerCase() === "y") {
          console.table(contacts);
        }
      }
    );
  } catch (error) {
    console.error("Error adding contact:", error);
    throw error;
  }
}

export { listContacts, getContactById, removeContact, addContact };
