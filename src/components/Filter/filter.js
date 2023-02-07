import React from 'react';
import { Component } from 'react';

export class Filter extends Component {
  state = {};

  changeInput = event => {
    const input = event.currentTarget.value;

    this.props.onChange( input );
  };
  render() {
    return (
      <>
        <input
          onChange={this.changeInput}
          type="text"
          name="name"
          //   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </>
    );
  }
}
