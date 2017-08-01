import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    // this.state = {
    //   course: { title: "" }
    // };
    //
    // this.onTitleChange = this.onTitleChange.bind(this);
    // this.onClickSave = this.onClickSave.bind(this);
  }

  // onTitleChange(event) {
  //   const course = this.state.course;
  //   course.title = event.target.value;
  //   this.setState({
  //     course: course
  //   });
  // }

  // onClickSave() {
  //   // this.props.createCourse(this.state.course);
  //   this.props.actions.createCourse(this.state.course);
  //
  // }

  courseRow(course, index) {
    return (<div key={index}>{course.title}</div>);
  }

  render() {
    return (
      <div>
        <h1>Courses</h1>
          {this.props.courses.map(this.courseRow)}
        {/* <h2>Add Course</h2>

        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.title} />

        <input type="submit" onClick={this.onClickSave} value="Save" /> */}
      </div>


    );
  }
}

CoursesPage.propTypes = {
  // courses: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return (
    {courses: state.courses}
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