import React, {PropTypes} from 'react';
import CourseListRow from './CourseListRow';

const CourseList = ({courses, authors, deleteCourse}) => {
 return (
   <table className="table">
     <thead>
     <tr>
       <th>&nbsp;</th>
       <th>Title</th>
       <th>Author</th>
       <th>Category</th>
       <th>Length</th>
       <th>&nbsp;</th>
     </tr>
     </thead>
     <tbody>
     {courses.map(course =>
       <CourseListRow
         key={course.id}
         course={course}
        //  author={new Promise((resolve, reject) => resolve(getAuthorById(authors, course.authorId)))}
        authors={authors}
         deleteCourse={deleteCourse}
       />
     )}
     </tbody>
   </table>
 );
};

CourseList.propTypes = {
 courses: PropTypes.array.isRequired,
 authors: PropTypes.array.isRequired,
 deleteCourse: PropTypes.func.isRequired
};

export default CourseList;
