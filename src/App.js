import "./App.css";
import contacts from "./contacts.json";
import React, { useState } from "react";



function App() {
  const [contactList, setContactList] = useState(contacts.slice(0, 5));
  return (
    <div className="App">
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
        {contactList.map((contact, i) => (
        <tr key={i}>
          <td><img src={contact.pictureUrl} alt={contact.name}/></td>
          <td>{contact.name}</td>
          <td>{contact.popularity}</td>
        </tr>
        ))}
      </table>
    </div>
  );
}

export default App;
