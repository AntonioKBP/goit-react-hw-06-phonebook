import { initState } from './users.init-state';
import { FILTER } from './users.types';

export const usersReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case FILTER:
      return { ...state, filter: payload };
    default:
      return state;
  }
};
