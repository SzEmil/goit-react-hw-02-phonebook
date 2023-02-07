import React from 'react';
import { Component } from 'react';
export class ContactList extends Component {
  state = {};

  readID = event => {
    const readElement = event.target;

    this.props.onClick(readElement);
  };
  render() {
    const { contactTab, search } = this.props;

    return (
      <ul>
        {contactTab
          .filter(contact =>
            contact.name.toLowerCase().includes(search.toLowerCase())
          )
          .map(contact => {
            return (
              <>
                <li key={contact.id} id={contact.id} name={contact.name}>
                  <span>
                    {contact.name}: {contact.number}
                  </span>
                  <button id={contact.id} onClick={this.readID}>
                    Delete
                  </button>
                </li>
              </>
            );
          })}
      </ul>
    );
  }
}
