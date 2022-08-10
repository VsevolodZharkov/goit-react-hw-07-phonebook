import { configureStore } from '@reduxjs/toolkit';//, getDefaultMiddleware 
// import {
//   persistStore,persistReducer,FLUSH,
//   REHYDRATE,PAUSE,PERSIST,
//   PURGE,REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import rootReducer from './Contacts/contacts-slice';

// const persistConfig = {
//   key: 'contacts',
//   storage,
// };
import rootReducer from './Contacts/contacts-reducers'
const store = configureStore({
  	reducer:{ 
			rootReducer
			},
  	})


// const persistor = persistStore(store);
export { store };//, persistor 
