import React, {PropTypes} from 'react';
import {Link} from 'react-router';

class CourseListRow extends React.Component {
  constructor() {
    super();
    this._onClick = this._onClick.bind(this);
  }

  _onClick() {
    this.props.deleteCourse(this.props.course);
  }

  _idConverter(id) {
    if(id) {
      return id.split('-').map(name => name[0].toUpperCase() + name.slice(1)).join(" ");
    }
  }

  render() {
    const { course } = this.props;
    return (
      <tr>
        <td><a href={course.watchHref} target="_blank">Watch</a></td>
        <td><Link to={'/course/' + course.id}>{course.title}</Link></td>
        <td>{this._idConverter(course.authorId)}</td>
        <td>{course.category}</td>
        <td>{course.length}</td>
        <td><a href="#" onClick={this._onClick}>Delete</a></td>
      </tr>
    );
  }
}

CourseListRow.propTypes = {
  course: PropTypes.object.isRequired,
  author: PropTypes.array,
  deleteCourse: PropTypes.func.isRequired
};


export default CourseListRow;
