import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';
import toastr from 'toastr';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);

    this.state = {
      course: { title: "" }
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    // this.onClickSave = this.onClickSave.bind(this);
    this.deleteCourse = this.deleteCourse.bind(this);
  }

  onTitleChange(event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({
      course: course
    });
  }

  // onClickSave() {
  //   // this.props.createCourse(this.state.course);
  //   this.props.actions.createCourse(this.state.course);

  // }

  deleteCourse(course, event) {
    event.preventDefault();
    this.props.actions.deleteCourse(course).catch(error => {
      throw(error);
    });
    toastr.warning(`${course.title} deleted`);

  }

  redirectToAddCoursePage() {
    browserHistory.push('/course');
  }

  render() {
    const {courses} = this.props;

    return (
      <div>
        <h1>Courses</h1>
        <input
          type="submit"
          value="Add Course"
          onClick={this.redirectToAddCoursePage}
        />
        {
          courses.length ?
          <CourseList
            authors={this.props.authors}
            courses={courses}
            deleteCourse={this.deleteCourse}
           />
           :
           <h1 className="jumbotron">No courses to display</h1>
        }
      </div>
    );
  }
}

CoursesPage.propTypes = {
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  let courses = state.courses.sort((courseA, courseB) => courseA.title > courseB.title );

  return (
    {
      authors: state.authors,
      courses: courses
    }
  );
}

function mapDispatchtoProps(dispatch) {
  return ({
    actions: bindActionCreators(courseActions, dispatch)
    //manual mapping
    // createCourse: course => dispatch(courseActions.createCourse(course))
  });
}

export default connect(mapStateToProps, mapDispatchtoProps)(CoursesPage);
