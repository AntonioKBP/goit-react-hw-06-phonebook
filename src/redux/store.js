// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
// import { devToolsEnhancer } from '@redux-devtools/extension';
// import { phoneBookReducer } from './users/users.reducer';
import { initState } from './users/users.init-state';
import { phoneBookReducer } from './users/users.slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// import { usersReducer } from './users/users.reducer';
// import { usersInitState } from './users/users.init-state';

// const enhancer = devToolsEnhancer();

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
// });

// export const store = createStore(phoneBookReducer, initState, enhancer);

const persistConfig = {
  key: 'phone-book-data',
  storage,
  blacklist: ['filter'],
};

const persistedReducer = persistReducer(persistConfig, phoneBookReducer);

export const store = configureStore({
  devTools: true,
  preloadedState: initState,
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// const contactsReducer = (state = [], action) => {};

// const filterReducer = (state = '', action) => {};
