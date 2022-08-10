import { axios } from 'axios';

import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  deleteContactsRequest,
  deleteContactsSuccess,
  deleteContactsError,
} from './contacts-actions';

axios.defaults.baseURL = 'https://62f3b001a84d8c96812999e0.mockapi.io/api/v1';
export const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest);
  try {
    const { data } = await axios.get('/contacts');
    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error));
  }
};

export const addContacts = contact => async dispatch => {
  dispatch(addContactsRequest);
  try {
    const { data } = await axios.post('/contacts');
    dispatch(addContactsSuccess(data), contact);
  } catch (error) {
    dispatch(addContactsError(error));
  }
};

export const deleteContacts = id => async dispatch => {
  dispatch(deleteContactsRequest);
  try {
    await axios.delete(`/contacts/${id}`);
    dispatch(deleteContactsSuccess(id));
  } catch (error) {
    dispatch(deleteContactsError(error));
  }
};
