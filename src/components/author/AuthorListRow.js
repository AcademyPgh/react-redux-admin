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
    return (

      <tr>
        <td><Link to={'/author/'+this.props.author.id}>Edit</Link></td>
        <td>{this.props.author.firstName}</td>
        <td>{this.props.author.lastName}</td>
        <td>{this.props.author.id}</td>
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
