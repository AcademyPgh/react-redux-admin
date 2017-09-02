import React, {PropTypes} from 'react';
import AuthorListRow from './AuthorListRow';

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
            <th>&nbsp;</th>
          </tr>
          </thead>
          <tbody>
            {this.props.authors.map(author =>
              <AuthorListRow
                key={author.id}
                author={author}
                deleteAuthor={this.props.deleteAuthor}
              />

          )}
          </tbody>
        </table>
    );
  }
}

AuthorList.propTypes = {
 authors: PropTypes.array.isRequired,
 deleteAuthor: PropTypes.func.isRequired
};

export default AuthorList;
