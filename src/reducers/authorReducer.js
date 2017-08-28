//set default value for state in parameters

import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function authorReducer(state = [], action) {
  switch (action.type) {
    case types.DELETE_AUTHOR_SUCCESS:
      return [...state.filter(author =>
         author.id !== action.authorId)
       ];
    case types.LOAD_AUTHORS_SUCCESS:
      return action.authors;
    default:
      return state;
  }
}
