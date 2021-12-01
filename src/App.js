import "./App.css";
import contacts from "./contacts.json";
import React, { useState } from "react";

function App() {
  const remainingContacts = contacts.slice(5);
  const [contactList, setContactList] = useState(contacts.slice(0, 5));
  function getRandomStar() {
    const random = Math.floor(Math.random() * remainingContacts.length);
    remainingContacts.splice(random, 1);
    return remainingContacts[random];
  }
  function addStar() {
    
    setContactList(contactList.concat([getRandomStar()]));
  }
  function sortByName() {
    const list = contactList.sort((a, b) => a.name.localeCompare(b.name));
    setContactList([...list]);
  }
  function sortByPopularity() {
    setContactList([...contactList.sort((a, b) => b.popularity-a.popularity)]);
  }

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={addStar}>Add Random Contact</button>
      <button onClick={sortByPopularity}>Sort by Popularity</button>
      <button onClick={sortByName}>Sort by Name</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contactList.map((contact, i) => (
            <tr key={i}>
              <td>
                <img src={contact.pictureUrl} alt={contact.name} />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              <td>{contact.wonOscar && <span>🏆</span>}</td>
              <td>{contact.wonEmmy && <span>🏆</span>}</td>
              <td><button onClick={sortByName}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
