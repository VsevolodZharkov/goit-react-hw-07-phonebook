import { addContact } from '../../redux/Contacts/contacts-operations';
import { useDispatch, useSelector } from 'react-redux';
import ContactList from '../ContactList/ContactList';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { deleteContact, fetchContacts } from 'redux/Contacts/contacts-operations';
import { useEffect } from 'react';
export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();
	
	useEffect(() => {
		dispatch(fetchContacts())
	}, [dispatch]);

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

	const handlerDelete = id => {
    dispatch(deleteContact(id));
  };

	const onSubmit = event => {
    event.preventDefault();

    const repeatCont = contacts?.some(
      elem => elem.name.toLowerCase() === name.toLowerCase()
    );
    if (repeatCont) {
      toast(`Invalid data entry`);
      return;
    }

    const user = { name, number };
    dispatch(addContact(user));
    setName('');
    setNumber('');
  };

  return (
    <>
		<form onSubmit={onSubmit}>
      <label >
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
      </label>
      <button type="submit">
        Add contact
      </button>
    </form>
		<ContactList handlerDelete={handlerDelete}/>
		</>
  );
};
