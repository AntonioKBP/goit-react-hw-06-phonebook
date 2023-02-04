import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const { createSlice } = require('@reduxjs/toolkit');
const { initState } = require('./users.init-state');

const phoneBookSlice = createSlice({
  name: 'users',
  initialState: initState,
  reducers: {
    userAddAction: (state, { payload }) => {
      state.contacts = [payload, ...state.contacts];
    },
    userDeleteAction: (state, { payload }) => {
      state.contacts = state.contacts.filter(user => user.id !== payload);
    },
    userFilterAction: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const { userAddAction, userDeleteAction, userFilterAction } =
  phoneBookSlice.actions;

// export const phoneBookReducer = phoneBookSlice.reducer;

const persistConfig = {
  key: 'phone-book-data',
  storage,
  blacklist: ['filter'],
};

export const phoneBookReducer = persistReducer(
  persistConfig,
  phoneBookSlice.reducer
);
