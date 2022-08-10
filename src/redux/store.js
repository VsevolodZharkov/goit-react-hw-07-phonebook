import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './Contacts/contacts-reducers'

const store = configureStore({
  	reducer: { 
			contacts: rootReducer
			},
})
export { store };
