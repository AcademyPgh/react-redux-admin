import React, {PropTypes} from 'react';
import {Link} from 'react-router';


const AuthorListRow = ({author, deleteAuthor}) => {
  return (
    <tr>
      <td><Link to={'/author/'+author.id}>Edit</Link></td>
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
