import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import AuthorForm from './AuthorForm';
import {bindActionCreators} from 'redux';
import * as authorActions from '../../actions/authorActions';
import toastr from 'toastr';


class ManageAuthorPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      author: Object.assign({}, this.props.author),
      errors: {},
      saving: false
    };

    this.saveAuthor = this.saveAuthor.bind(this);
    this.updateAuthorState = this.updateAuthorState.bind(this);
  }

  updateAuthorState(event) {
    const field = event.target.name;
    let author = Object.assign({}, this.state.author);

    author[field] = event.target.value;
    return this.setState({author: author});
  }

  authorFormIsValid() {
    let formIsValid = true;
    let errors = {};

    if(this.state.author.firstName.length < 3) {
      errors.firstName = 'First Name must be at least 3 characters';
      formIsValid = false;
    }

    if(this.state.author.lastName.length < 3) {
      errors.lastName = 'Last Name must be at least 3 characters';
      formIsValid = false;
    }

    this.setState({errors: Object.assign({}, this.state, errors)});
    return formIsValid;
  }

  saveAuthor(event) {
    event.preventDefault();

    if(!this.authorFormIsValid()) {
      return;
    }

    this.setState({saving: true});
    this.props.actions.saveAuthor(this.state.author)
    .then(() => this.redirect())
    .catch(error => {
      toastr.error(error);
      this.setState({saving: false});
    });
  }

  redirect() {
    this.setState({saving: false});
    toastr.success('Author saved.');
    this.context.router.push('/authors');
  }

  render () {
    return (
      <div>
        <AuthorForm
            author={this.state.author}
            onSave={this.saveAuthor}
            onChange={this.updateAuthorState}
            errors={this.state.errors}
            saving={this.state.saving}
        />
      </div>

    );
  }
}

ManageAuthorPage.propTypes = {
  author: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

ManageAuthorPage.contextTypes = {
  router: PropTypes.object
};

function getAuthorById(authors, id) {
    const author = authors.filter(author => author.id == id);
    if(author.length) return author[0];
    return null;
}

function mapStateToProps(state, ownProps) {
  const authorId = ownProps.params.id;

  let author = {
    firstName: '', lastName: '', id: ''
  };

  if (authorId) {
    author = getAuthorById(state.authors, authorId);
  }

  return ({
    author: author
  });
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authorActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageAuthorPage);
