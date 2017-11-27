//set default value for state in parameters

import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function authorReducer(state = [], action) {
  switch (action.type) {
    case types.LOAD_AUTHORS_SUCCESS:
      return action.authors;
    case types.CREATE_AUTHOR_SUCCESS:
      return [...state,
        Object.assign({}, action.author)
       ].sort((authorA, authorB) => authorA.lastName > authorB.lastName );
     case types.UPDATE_AUTHOR_SUCCESS:
       return [...state.filter(author =>
          author.id !== action.author.id),
           Object.assign({}, action.author)
        ].sort((authorA, authorB) => authorA.lastName > authorB.lastName );
      case types.DELETE_AUTHOR_SUCCESS:
        return [...state.filter(author =>
           author.id !== action.authorId)
         ];
    default:
      return state;
  }
}
