import AuthorApi from '../api/mockAuthorApi';
import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';

export function createAuthorSuccess(author) {
  return ({
    type: types.CREATE_AUTHOR_SUCCESS, author
  });
}

export function updateAuthorSuccess(author) {
  return ({
    type: types.UPDATE_AUTHOR_SUCCESS, author
  });
}

export function LoadAuthorSuccess(authors) {
  return ({
    type: types.LOAD_AUTHORS_SUCCESS, authors
  });
}

export function loadAuthors() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return AuthorApi.getAllAuthors().then(authors => {
      dispatch(LoadAuthorSuccess(authors));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveAuthor(author) {
  return dispatch => {
    dispatch(beginAjaxCall());
    return AuthorApi.saveAuthor(author).then((dispatch, author) => {
      author.id ? dispatch(updateAuthorSuccess) : dispatch(createAuthorSuccess)
    }).catch(error => {
      throw(error);
    });
  };
}
