import React from 'react';
import { Component } from 'react';
import { ContactForm } from './ContactForm/contactsForm';
import { ContactList } from './ContactList/contactList';
import { Filter } from './Filter/filter';
let tab = [];

const INITIAL_STATE = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  name: '',
  number: '',
  filter: '',
};
export class App extends Component {
  state = {
    ...INITIAL_STATE,
  };
  static defaultProps = {};

  addContact = values => {
    console.log(values);
    const { contacts } = this.state;
    const existingContact = contacts.find(
      contact => contact.name === values.name
    );
    if (existingContact) {
      alert(`${values.name} already in contacts!`);
      return;
    }
    tab.push(values);

    // this.setState((state,props)=>({
    //   contacts:
    // }))
    this.setState({
      contacts: [...tab],
      name: values.name,
      number: values.number,
    });
  };

  showInput = userInput => {
    console.log(userInput);
    this.setState({
      filter: userInput,
    });
  };
  deleteUser = readElement => {
    const { contacts } = this.state;
    let tabs = [...contacts];

    console.log(readElement.id);
    const findID = tabs.find(contact => contact.id === readElement.id);
    const indexOfID = tabs.findIndex(contact => contact === findID);
    console.log(indexOfID);
    tabs.splice(indexOfID, 1);

    const tabID = tab.find(contact => contact.id === readElement.id);
    const indexOfTab = tab.findIndex(contact => contact === tabID);
    tab.splice(indexOfTab, 1);

    this.resetValues();
    this.setState({ contacts: [...tabs] });
  };

  resetValues = () => {
    this.setState({ ...INITIAL_STATE });
  };
  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter onChange={this.showInput} />
        <ContactList
          contactTab={this.state.contacts}
          search={this.state.filter}
          onClick={this.deleteUser}
        />
      </>
    );
  }
}
