import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/Contacts/contacts-operations';
import Filter from '../Filter/Filter';
import { filterContacts } from 'redux/Contacts/contacts-actions';
export default function ContactList({ handlerDelete }) {
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);
  console.log(contacts);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  const handlerFilter = e => {
    dispatch(filterContacts(e.target.value));
  };

  const filteredContacts = () => {
    return contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <>
      <Filter handlerFilter={handlerFilter} />
      <ul>
        {filteredContacts()?.map(({ id, name, number }) => {
          return (
            <li key={id}>
              <p>
                {name}: {number}
              </p>
              <button type="button" onClick={() => handlerDelete(id)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

ContactList.propTypes = {
  contactList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
