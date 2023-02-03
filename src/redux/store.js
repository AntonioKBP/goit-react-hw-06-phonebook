// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
// import { devToolsEnhancer } from '@redux-devtools/extension';
import { phoneBookReducer } from './users/users.reducer';
import { initState } from './users/users.init-state';
// import { usersReducer } from './users/users.reducer';
// import { usersInitState } from './users/users.init-state';

// const enhancer = devToolsEnhancer();

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
// });

// export const store = createStore(phoneBookReducer, initState, enhancer);

export const store = configureStore({
  devTools: true,
  preloadedState: initState,
  reducer: phoneBookReducer,
});

// const contactsReducer = (state = [], action) => {};

// const filterReducer = (state = '', action) => {};
