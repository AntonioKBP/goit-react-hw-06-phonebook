import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { usersReducer } from './users/users.reducer';
import { usersInitState } from './users/users.init-state';

const initState = { usersInitState };

// const contactsReducer = (state = [], action) => {};

// const filterReducer = (state = '', action) => {};

const enhancer = devToolsEnhancer();

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
// });

export const store = createStore(usersReducer, initState, enhancer);
