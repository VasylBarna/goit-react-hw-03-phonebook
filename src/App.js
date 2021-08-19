import { Component } from 'react';
import Container from './components/Container';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter/Filter';
import ContactsList from './components/ContactsList';
import styles from './App.module.scss';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(contacts);
    if (parseContacts) {
      this.setState({ contacts: parseContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = (text, number) => {
    const contact = {
      id: uuidv4(),
      name: text,
      number,
    };

    const findContact = this.state.contacts.find(
      contact => contact.name.toLowerCase() === text.toLowerCase(),
    );
    if (findContact) {
      alert(text + ` is already in contacts`);
      return;
    }
    this.setState({
      contacts: [...this.state.contacts, contact],
    });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  hadleFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilterContact = () => {
    const { contacts, filter } = this.state;
    const filterContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
    return filterContacts;
  };

  render() {
    return (
      <Container>
        <h1 className={styles.title}>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2 className={styles.subtitle}>Contacts</h2>
        <Filter onChange={this.hadleFilter} filter={this.state.filter} />
        <ContactsList
          contacts={this.getFilterContact()}
          onDeleteContacts={this.deleteContact}
        />
      </Container>
    );
  }
}

export default App;
