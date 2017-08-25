import React, {PropTypes} from 'react';

const AuthorListRow = ({author, deleteAuthor}) => {
  return (
    <tr>
      <td onClick={deleteAuthor}>deleteAuthor</td>
      <td>{author.firstName}</td>
      <td>{author.lastName}</td>
      <td>{author.id}</td>
    </tr>
  );
};

AuthorListRow.propTypes = {
 author: PropTypes.object.isRequired
};

export default AuthorListRow;
