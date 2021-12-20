import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authorizationReducer from './authorizationReduser';

const persistConfig = {
  key: 'root',
  storage,
  // blacklist: ['authorisation'],
};

const reducers = combineReducers({
  authorisation: authorizationReducer,
});

const persistedReducers = persistReducer(persistConfig, reducers);

export default persistedReducers;
