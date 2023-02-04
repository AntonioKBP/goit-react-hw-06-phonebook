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
