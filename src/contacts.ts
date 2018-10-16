import Contact from './app/contact';
import ContactData from './assets/ab.js'
export const CONTACTS: Contact[] = ContactData


// declare var require: {
//   <T>(path: string): T;
//   (paths: string[], callback: (...modules: any[]) => void): void;
//   ensure: (
//     paths: string[],
//     callback: (require: <T>(path: string) => T) => void
//   ) => void;
// };
// // declare var fs: any; 

// // fs = require('fs');
// const fs = (<any>window).require("fs");
// const data = fs.readFileSync('./src/assets/ab.json', 'utf8');
// const address = JSON.parse(data);

// export const CONTACTS: Contact[] = address.AddressBook.Contact