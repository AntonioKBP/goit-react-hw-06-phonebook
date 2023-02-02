import { FILTER, DELETE_USER, ADD_USER } from './users.types';

export const userDeleteAction = payload => ({ type: DELETE_USER, payload });
export const userFilterAction = payload => ({ type: FILTER, payload });
export const userAddAction = payload => ({ type: ADD_USER, payload });
