import React, {PropTypes} from 'react';
import AuthorList from './AuthorList';

import {browserHistory} from 'react-router';


class AuthorsPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      authors: []
    };

    this.redirectToAddAuthorPage = this.redirectToAddAuthorPage.bind(this);
  }

  redirectToAddAuthorPage() {
    browserHistory.push('/author')
  }

  render() {
    return (
      <div>
        <h1>Authors</h1>

        <input
          type="submit"
          value="Add Author"
          onClick={this.redirectToAddAuthorPage}
        />
        <AuthorList
          authors={this.state.authors}
        />
      </div>
    );
  }
}

export default AuthorsPage;
