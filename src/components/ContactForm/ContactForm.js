import { Component } from 'react';
import styles from './ContactForm.module.scss';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  getSubmit = e => {
    e.preventDefault();

    const { name, number } = this.state;
    this.props.onSubmit(name, number);
    this.reset();
  };
  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  getInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={styles.form} onSubmit={this.getSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            onChange={this.getInputChange}
            required
          />
        </label>
        <label>
          Phone number
          <input
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            onChange={this.getInputChange}
            required
          />
        </label>

        <button className={styles.btn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
