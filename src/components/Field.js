import React from 'react';
import languageContext from '../contexts/LanguageContext';

class Field extends React.Component {
  static contextType = languageContext;

  render() {
    const text = this.context.language === 'english' ? 'Name' : 'Naam';
    return (
      <div className="ui field">
        <label>{text}</label>
        <input />
      </div>
    );
  }
}

export default Field;