import React, { Component } from "react";
import { Button, FormStyle } from "./form.styled";
// import { nanoid } from "nanoid";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  HandleChange = (e) => {
    const { name, value } = e.currentTarget;
    // console.log(e.currentTarget.value);
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
  };

  // addName = (name, number) => {
  // if (
  //   this.state.contacts.find(
  //     (contact) => contact.name.toLowerCase() === name.toLowerCase()
  //   )
  // ) {
  //   alert(`${name} is already in contacts!`);
  //   return;
  // }
  // const newContact = {
  //   id: nanoid(),
  //   name: name,
  //   number: number,
  // };
  //   this.setState(({ contacts }) => ({
  //     contacts: [newContact, ...contacts],
  //   }));

  reset = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    return (
      <div>
        <FormStyle onSubmit={this.handleSubmit}>
          <label htmlFor="">
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.HandleChange}
            ></input>
          </label>
          <label htmlFor="">
            Number
            <input
              type="tel"
              name="number"
              value={this.state.number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.HandleChange}
            ></input>
          </label>
          <Button type="submit">Add contact</Button>
        </FormStyle>
      </div>
    );
  }
}

export default ContactForm;
