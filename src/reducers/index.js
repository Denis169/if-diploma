import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authorizationReducer from './AuthorizationReduser';
import allBooksReducer from './AllBooksReduser';
import settingsReducer from './SettingsReduser';
import yourOrdersReducer from './YourOrdersReduser';
import searchReducer from './SearchReduser';

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
  search: searchReducer,
});

const persistedReducers = persistReducer(persistConfig, reducers);

export default persistedReducers;
