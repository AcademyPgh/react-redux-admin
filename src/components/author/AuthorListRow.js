import React, {PropTypes} from 'react';
import {Link} from 'react-router';


class AuthorListRow extends React.Component {
  constructor() {
    super();
    this._onClick = this._onClick.bind(this);
  }

  _onClick() {
    this.props.deleteAuthor(this.props.author.id);
  }

  render() {
    const {author} = this.props;
    return (

      <tr>
        <td><Link to={'/author/'+author.id}>Edit</Link></td>
        <td>{author.firstName}</td>
        <td>{author.lastName}</td>
        <td>{author.id}</td>
        <td><a href="#" onClick={this._onClick}>Delete</a></td>
      </tr>
    );
  }
}

AuthorListRow.propTypes = {
 author: PropTypes.object.isRequired,
 deleteAuthor: PropTypes.func.isRequired
};

export default AuthorListRow;
