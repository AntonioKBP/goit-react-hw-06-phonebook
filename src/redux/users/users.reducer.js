import { initState } from './users.init-state';
import { ADD_USER, FILTER, DELETE_USER } from './users.types';
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

export const contactsReducer = createReducer(initState, builder => {
  builder
    .addCase(ADD_USER, (state, { payload }) => {
      return [payload, ...state];
    })
    .addCase(DELETE_USER, (state, { payload }) => {
      return state.filter(user => user.id !== payload);
    });
});

export const filterReducer = createReducer(initState, builder => {
  builder.addCase(FILTER, (state, { payload }) => {
    return payload;
  });
});

export const phoneBookReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

// ======================== Clean Redux All reducers in one ========================

// export const usersReducer = (state = initState, { type, payload }) => {
//   switch (type) {
//     case FILTER:
//       return { ...state, filter: payload };

//     case ADD_USER:
//       return { ...state, contacts: [payload, ...state.contacts] };

//     case DELETE_USER:
//       return {
//         ...state,
//         contacts: state.contacts.filter(user => user.id !== payload),
//       };
//     default:
//       return state;
//   }
// };

// ======================== Clean Redux Reducers separated ===============================

// =========================== First Reducer Clean Redux =================================

// const contactsReducer = (state = initState.contacts, { type, payload }) => {
//   switch (type) {
//     case ADD_USER:
//       return [payload, ...state];

//     case DELETE_USER:
//       return state.filter(user => user.id !== payload);

//     default:
//       return state;
//   }
// };

// ========================== First Reducer ToolKit Redux Old =================================

// export const contactsReducer = createReducer(initState, {
//   [ADD_USER]: (state, { payload }) => {
//     return [payload, ...state];
//   },
//   [DELETE_USER]: (state, { payload }) => {
//     return state.filter(user => user.id !== payload);
//   },
// });

// ========================== First Reducer ToolKit Redux Modern =================================

// export const contactsReducer = createReducer(initState, builder => {
//   builder
//     .addCase(ADD_USER, (state, { payload }) => {
//       return [payload, ...state];
//     })
//     .addCase(DELETE_USER, (state, { payload }) => {
//       return state.filter(user => user.id !== payload);
//     });
// });

// =========================== Second Reducer Clean Redux =================================

// const filterReducer = (state = initState.filter, { type, payload }) => {
//   switch (type) {
//     case FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };

// ========================== Second Reducer ToolKit Redux Old =================================

// export const filterReducer = createReducer(initState, {
//   [FILTER]: (state, { payload }) => {
//     return payload;
//   },
// });

// ========================== First Reducer ToolKit Redux Modern =================================

// export const filterReducer = createReducer(initState, builder => {
//   builder.addCase(FILTER, (state, { payload }) => {
//     return payload;
//   });
// });

// export const phoneBookReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
// });
