# CLI Contacs Application

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
