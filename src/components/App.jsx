import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';
import PropTypes from 'prop-types';
import { FILTER } from 'redux/users/users.types';

import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

import {
  Main,
  MainTitle,
  SecondartTitle,
} from './TitleAndMainStyled/TitleAndMainStyled.styled';

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const filter = useSelector(state => state.filter);

  useEffect(() => {
    console.log('mount');
    const contacts = localStorage.getItem('contacts');
    const ParcedContacts = JSON.parse(contacts);
    console.log(ParcedContacts);
    if (ParcedContacts) {
      setContacts(ParcedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addUser = data => {
    const findExistsName = contacts.some(contact => contact.name === data.name);
    if (findExistsName) {
      Notify.warning(`${data.name} is already in contacts`);
      return;
    } else {
      const newAbonent = {
        id: nanoid(),
        ...data,
      };
      setContacts(prevState => [newAbonent, ...prevState]);
    }
  };

  const dispatch = useDispatch();

  const handleSearch = e => {
    dispatch({ type: FILTER, payload: e.target.value });
  };
  const handleDeleteContact = contactId => {
    setContacts(prevState => prevState.filter(item => item.id !== contactId));
  };

  const contactsLenght = contacts.length;
  const newUsers = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Main>
      <MainTitle>PhoneBook</MainTitle>
      <ContactForm onSubmit={addUser} />

      <SecondartTitle>Contacts</SecondartTitle>
      <Filter filterValue={filter} onSearch={handleSearch} />
      {contactsLenght > 0 && (
        <ContactList users={newUsers} onDeleteContact={handleDeleteContact} />
      )}
    </Main>
  );
};

App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.number.isRequired,
      number: PropTypes.number,
    })
  ),
  filter: PropTypes.string,
};
