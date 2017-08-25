import React, {PropTypes} from 'react';
import AuthorList from './AuthorList';
import * as authorActions from '../../actions/authorActions';

import {browserHistory} from 'react-router';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


class AuthorsPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      authors: []
    };

    this.redirectToAddAuthorPage = this.redirectToAddAuthorPage.bind(this);
  }

  redirectToAddAuthorPage() {
    browserHistory.push('/author');
  }

  deleteAuthor(author) {
    return null;
    // TODO
  }

  render() {
    const {authors} = this.props;

    return (
      <div>
        <h1>Authors</h1>
        <input
          type="submit"
          value="Add Author"
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
}

function mapDispatchtoProps(dispatch) {
  return ({
    actions: bindActionCreators(authorActions, dispatch)
  });
}

export default connect(mapStateToProps, mapDispatchtoProps)(AuthorsPage);
