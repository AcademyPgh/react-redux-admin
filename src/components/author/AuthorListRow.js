import React, {PropTypes} from 'react';

const AuthorListRow = ({author, deleteAuthor}) => {
  return (
    <tr>
      <td>{author.firstName}</td>
      <td>{author.lastName}</td>
      <td>{author.id}</td>
      <td><a href="#" onClick={deleteAuthor.bind(this, author.id)}>Delete</a></td>
    </tr>
  );
};

AuthorListRow.propTypes = {
 author: PropTypes.object.isRequired,
 deleteAuthor: PropTypes.func.isRequired
};

export default AuthorListRow;
