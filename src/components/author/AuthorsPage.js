import React, {PropTypes} from 'react';
import AuthorList from './AuthorList';
import * as authorActions from '../../actions/authorActions';

import {browserHistory} from 'react-router';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import toastr from 'toastr';


class AuthorsPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      authors: []
    };

    this.redirectToAddAuthorPage = this.redirectToAddAuthorPage.bind(this);
    this.deleteAuthor = this.deleteAuthor.bind(this);
  }

  redirectToAddAuthorPage() {
    browserHistory.push('/author');
  }

  deleteAuthor(id, event) {
    event.preventDefault();
    // console.log(event)
    // console.log(id)
    this.props.actions.deleteAuthor(id).catch(error => {
      toastr.error(error);
    });
    toastr.warning(`${id} deleted`);
  }

  render() {
    const {authors} = this.props;

    return (
      <div>
        <h1>Authors</h1>
        <input
          type="submit"
          value="Add Author"
          deleteAuthor={this.deleteAuthor}
          onClick={this.redirectToAddAuthorPage}
        />
        <AuthorList
          deleteAuthor = {this.deleteAuthor}
          authors={authors}
        />
      </div>
    );
  }
}

AuthorsPage.propTypes = {
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return ({
    authors: state.authors
  });
  //each property on the object you define will
  //become a property on container Component
}

function mapDispatchtoProps(dispatch) {
  return ({
    actions: bindActionCreators(authorActions, dispatch)
  });
}

export default connect(mapStateToProps, mapDispatchtoProps)(AuthorsPage);
