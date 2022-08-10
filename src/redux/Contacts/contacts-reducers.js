
import { createReducer } from 'redux';
import { combineReducers } from 'redux';
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
  filterContacts,
} from './contacts-actions';

const items = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactsRequest]: (state, { payload }) => [...state, payload],
  [deleteContactsRequest]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [filterContacts]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [fetchContactsRequest]: (state, { payload }) => true,
  [fetchContactsSuccess]: (state, { payload }) => false,
  [fetchContactsError]: (state, { payload }) => false,
  [addContactsRequest]: (state, { payload }) => true,
  [addContactsSuccess]: (state, { payload }) => false,
  [addContactsError]: (state, { payload }) => false,
  [deleteContactsRequest]: (state, { payload }) => true,
  [deleteContactsSuccess]: (state, { payload }) => false,
  [deleteContactsError]: (state, { payload }) => false,
});

export default combineReducers({
  filter,
  items,
  loading,
});
