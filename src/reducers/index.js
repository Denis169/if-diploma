import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authorizationReducer from './authorizationReduser';
import allBooksReducer from './allBooksReduser';
import settingsReducer from './settingsReduser';
import yourOrdersReducer from './yourOrdersReduser';

const persistConfig = {
  key: 'root',
  storage,
  // blacklist: ['authorisation'],
};

const reducers = combineReducers({
  authorisation: authorizationReducer,
  allBooks: allBooksReducer,
  settings: settingsReducer,
  yourOrders: yourOrdersReducer,
});

const persistedReducers = persistReducer(persistConfig, reducers);

export default persistedReducers;
