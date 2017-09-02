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
    let author = this.props.authors.filter(author => author.id === id)[0];
    event.preventDefault();

    const courses = hasCourse(author, this.props.courses);
    console.log(courses)

    if (courses.length) {
      toastr.error(`Cannot delete ${author.firstName} ${author.lastName} until all corresponding courses are deleted: ${courses.map(course => course.title).join(", ")}.`);
    } else {
      this.props.actions.deleteAuthor(id).catch(error => {
        toastr.error(error);
      });
      toastr.warning(`${author.firstName} ${author.lastName} deleted`);
    }
  }



  render() {
    console.log(this.props.courses)
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
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function hasCourse(author, courseList) {
  return courseList.filter(course => course.authorId === author.id);
}

function mapStateToProps(state, ownProps) {
  return ({
    authors: state.authors,
    courses: state.courses
  });
  //each property on the object you define will
  //become a property on container Component
}

function mapDispatchtoProps(dispatch) {
  return ({
    actions: bindActionCreators(authorActions, dispatch)
  });
  //each property on the object you define will
  //become a property on container Component
  //accessible by "this.props.actions"
}

export default connect(mapStateToProps, mapDispatchtoProps)(AuthorsPage);
