# Node Homework - CLI Contacs Application

This Command Line Interface (CLI) application allows you to manage your contacts. You can list all your contacts, add new ones, get contact details by ID, and remove contacts. It's a convenient way to keep track of your contacts right from your terminal.

## Installation

Before you start using this application, you need to follow these steps to set it up:

<ol>
<li>Clone this repository to your local machine: git clone [repository-url]</li><li>Install the required dependencies: npm install</li>
</ol>

## Usage

You can perform various actions using this CLI application. Here are the available commands and how to use them:
<ul>
<li>
<strong>List All Contacts:</strong>
To view a list of all your contacts, use the following command:
<pre>npm run start -- -a list</pre>
</li>
<li>
<strong>Get Contact by ID:</strong>
Retrieve contact details by providing the contact's ID:
<pre>npm run start -- --action get --id [contact-id]</pre>
Replace <code>[contact-id]</code> with the actual ID of the contact you want to view.
</li>
<li>
<strong>Add a New Contact:</strong>
To add a new contact, use the following command:
<pre>npm run start -- --action add --name [name] --email [email] --phone [phone]</pre>
Replace <code>[name]</code>, <code>[email]</code>, and <code>[phone]</code> with the contact's details.
</li>
<li>
<strong>Remove a Contact by ID:</strong>
Remove a contact from your list by specifying its ID:
<pre>npm run start -- --action remove --id [contact-id]</pre>
Replace <code>[contact-id]</code> with the actual ID of the contact you want to remove.
</li>
</ul>

## Screenshots

This screenshot showcases the CLI Contacts Application with various commands and their outputs.
https://monosnap.com/file/kOKp3chMKoxcGTpCx92DKggMYg8LwW

<a href="https://ibb.co/ZG9xV2q"><img src="https://i.ibb.co/ZG9xV2q/Zrzut-ekranu-2023-10-16-o-10-14-32.png" alt="Zrzut-ekranu-2023-10-16-o-10-14-32" border="0" /></a>

## Step 1

<ul>
<li>Initialize npm in the project</li>
<li>In the root of the project, create a file index.js</li>
<li>Install package nodemon as development dependency (devDependencies)</li>
<li>In package.json file add "scripts" to run index.js</li>
<li>start script that starts index.js with node</li>
<li>start:dev script that starts index.js with nodemon</li>
</ul>

## Step 2

Create a folder db in the root of the project. To store contacts, download and use the contacts.json file, putting it in the db folder. <br>

At the root of the project, create a contacts.js file.

<ul>
<li>Make imports of modules fs and path to work with the file system</li>
<li>Create a contactsPath variable and put the path to the contacts.json file in it. To compose a path, use the methods of the path module</li>
<li>Add functions to work with a collection of contacts. In functions, use the fs module and its readFile() and writeFile() methods</li>
<li>Make export of created functions via module.exports</li>
</ul>

## Step 3

Make an import of the contacts.js module in the index.js file and check the functionality of the functions for working with contacts.

## Step 4

The index.js file imports the yargs package for convenient parsing of command line arguments. Use the ready-made function invokeAction() which receives the type of action to be performed and the required arguments. The function calls the appropriate method from the contacts.js file, passing it the necessary arguments. <br>
Alternatively, you can use the commander module to parse command line arguments. This is a more popular alternative to the yargs module.

## Step 5

Run the commands in the terminal and take a separate screenshot of the result of each command.

## Step 6 - Homework Submission

Command execution screenshots can be uploaded to any free cloud image storage service (Example: monosnap, imgbb.com) and the corresponding links are necessary add to the README.md file. Create this file at the root of the project. Then attach a link to the homework repository at LMS for mentor to check.

### Admission Criteria

<ul>
<li>You created a repository with homework — CLI application</li>
<li>The assignment has been sent to the mentor at LMS for review (repository link)</li>
<li>The code corresponds to the terms of reference of the project</li>
<li>No unhandled errors when executing code</li>
<li>The names of variables, properties and methods start with a lowercase letter and are written in - - - CamelCase notation. English nouns are used</li>
<li>The name of the function or method contains a verb</li>
<li>There are no commented sections of code in the code</li>
<li>The project works correctly in the current LTS version of Node</ul>
