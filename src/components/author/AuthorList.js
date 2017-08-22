import React, {PropTypes} from 'react';

class AuthorList extends React.Component {
  render () {
    return (
        <table className="table">
          <thead>
          <tr>
            <th>&nbsp;</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>ID</th>
          </tr>
          </thead>
          <tbody>

          </tbody>
        </table>
    );
  }
}

AuthorList.propTypes = {
 authors: PropTypes.array.isRequired
};

export default AuthorList;
