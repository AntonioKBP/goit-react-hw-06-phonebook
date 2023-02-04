import { createAction } from '@reduxjs/toolkit';
// import { FILTER, DELETE_USER, ADD_USER } from './users.types';

// export const userDeleteAction = payload => ({ type: DELETE_USER, payload });
export const userDeleteAction = createAction('DELETE_USER');

// export const userFilterAction = payload => ({ type: FILTER, payload });
export const userFilterAction = createAction('FILTER');

// export const userAddAction = payload => ({ type: ADD_USER, payload });
export const userAddAction = createAction('ADD_USER');
