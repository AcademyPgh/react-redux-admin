import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import AuthorForm from './AuthorForm';

class ManageAuthorPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      author: Object.assign({}, this.props.author)
    };

  }

  updateAuthorState(event) {
    this.state = this.state.splice();
  }

  render () {
    return (
      <div>
        <h1>Edit Author</h1>
        <AuthorForm
            author={this.state}
        />
      </div>

    );
  }
}

function mapStateToProps(state) {
  return state;
}

ManageAuthorPage.propTypes = {
  author: PropTypes.object
};

ManageAuthorPage.contextTypes = {
  router: PropTypes.object
};


export default connect(mapStateToProps)(ManageAuthorPage);
