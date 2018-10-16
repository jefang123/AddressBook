import Contact from './app/contact';

const fs = require('fs');
const data = fs.readFileSync('./src/assets/ab.json', 'utf8');
const address = JSON.parse(data);

export const CONTACTS: Contact[] = address.AddressBook.Contact