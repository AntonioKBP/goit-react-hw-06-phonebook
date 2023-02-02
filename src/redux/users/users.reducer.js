import { initState } from './users.init-state';
import { ADD_USER, FILTER, DELETE_USER } from './users.types';

export const usersReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_USER:
      return { ...state, contacts: [payload, ...state.contacts] };
    case FILTER:
      return { ...state, filter: payload };
    case DELETE_USER:
      return {
        ...state,
        contacts: state.contacts.filter(user => user.id !== payload),
      };
    default:
      return state;
  }
};
