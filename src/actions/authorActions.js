import AuthorApi from '../api/mockAuthorApi';
import * as types from './actionTypes';

export function LoadAuthorSuccess(authors) {
  return ({
    type: types.LOAD_AUTHORS_SUCCESS, authors
  });
}

export function loadAuthors() {
  return dispatch => {
    return AuthorApi.getAllAuthors().then(authors => {
      dispatch(LoadAuthorSuccess(authors));
    }).catch(error => {
      throw(error);
    });
  };
}
