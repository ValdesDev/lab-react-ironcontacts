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

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={addStar}>Add Random Contact</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
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
              {contact.wonOscar && <td>🏆</td>}
              {contact.wonEmmy && <td>🏆</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
