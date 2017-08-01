import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

export function createCourse(course) {
  return { type: types.CREATE_COURSE, course }; // omitted value 'course: course'. In ES6, you only need the key
}

export function loadCoursesSuccess(courses) {
    return { type: types.LOAD_COURSES_SUCCESS, courses };
}

//Thunks:
// a Thunk always returns a funciton that accepts a dispatch:
export function loadCourses() {
  return function (dispatch) {
    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      throw error;
    });
  };
}
