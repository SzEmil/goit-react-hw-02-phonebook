import React from 'react';
import { Component } from 'react';
import { nanoid } from 'nanoid';
export class ContactForm extends Component {
  state = {};

  addNewContact = event => {
    event.preventDefault();
    const userId = nanoid();
    let dataObj = {};
    const form = event.currentTarget;
    const inputValue = event.currentTarget.elements.name.value;
    const inputValuePhone = event.currentTarget.elements.number.value;
    dataObj = {
      id: userId,
      name: inputValue,
      number: inputValuePhone,
    };
    this.props.onSubmit(dataObj);

    form.reset();
  };
  render() {
    return (
      <>
        <form onSubmit={this.addNewContact}>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button>Add contact</button>
        </form>
      </>
    );
  }
}
