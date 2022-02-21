import React, { Component } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./components/ContactForm";
import Section from "./components/Section";
import ContactList from "./components/Contacts";
import Filter from "./components/Filter";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  // const contactOptions = this.contacts;

  // console.log(contactOptions);

  HandleFormSubmit = (data) => {
    console.log(data);
    if (
      this.state.contacts.find(
        (contact) => contact.name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      alert(`${data.name} is already in contacts`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };
    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
    console.log(newContact);
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts)
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  }

  render() {
    const visibleContacts = this.getVisibleContacts();
    return (
      <div>
        <Section title="Phonebook">
          <ContactForm onSubmit={this.HandleFormSubmit}></ContactForm>
        </Section>

        <Section title="Contacts">
          <Filter filter={this.state.filter} changeFilter={this.changeFilter} />

          <ContactList
            contacts={visibleContacts}
            OnDeleteContact={this.deleteContact}
          />
        </Section>
      </div>
    );
  }
}

export default App;
