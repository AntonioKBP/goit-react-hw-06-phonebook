import { initState } from './users.init-state';
import { ADD_USER, FILTER, DELETE_USER } from './users.types';
import { combineReducers } from 'redux';

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

const contactsReducer = (state = initState.contacts, { type, payload }) => {
  switch (type) {
    case ADD_USER:
      return [payload, ...state];

    case DELETE_USER:
      return state.filter(user => user.id !== payload);

    default:
      return state;
  }
};
const filterReducer = (state = initState.filter, { type, payload }) => {
  switch (type) {
    case FILTER:
      return payload;

    default:
      return state;
  }
};

export const phoneBookReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
