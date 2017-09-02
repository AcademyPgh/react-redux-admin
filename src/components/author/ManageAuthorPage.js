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

  // componentWillReceiveProps(nextProps) {
  //   console.log("nextProps")
  //   console.log(nextProps.author)
  //   if(this.props.author.id !== nextProps.author.id) {
  //     this.setState({author: Object.assign({}, nextProps.author)});
  //   }
  // }

  updateAuthorState(event) {
    const field = event.target.name;
    let author = Object.assign({}, this.state.author);

    author[field] = event.target.value;
    return this.setState({author: author});
  }

  saveAuthor(event) {
    event.preventDefault();
    //TODO validate author
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
