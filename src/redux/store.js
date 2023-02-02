import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { usersReducer } from './users/users.reducer';
import { initState } from './users/users.init-state';
// import { usersReducer } from './users/users.reducer';
// import { usersInitState } from './users/users.init-state';

const enhancer = devToolsEnhancer();

export const store = createStore(usersReducer, initState, enhancer);

// const contactsReducer = (state = [], action) => {};

// const filterReducer = (state = '', action) => {};

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
// });
