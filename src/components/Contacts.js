import React, { Component } from "react";
import { Button } from "./form.styled";
// import { nanoid } from "nanoid";

// const contactOptions = [
//   { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//   { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//   { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//   { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
// ];

const ContactList = ({ contacts, OnDeleteContact }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        <span>
          {name} : {number}
        </span>
        <Button onClick={() => OnDeleteContact(id)}>Delete</Button>
      </li>
    ))}
  </ul>
);

export default ContactList;
