import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';
import {beginAjaxCall} from './ajaxStatusActions';

export function createCourseSuccess(course) {
  return { type: types.CREATE_COURSE_SUCCESS, course }; // omitted value 'course: course'. In ES6, you only need the key
}

export function updateCourseSuccess(course) {
  return { type: types.UPDATE_COURSE_SUCCESS, course }; // omitted value 'course: course'. In ES6, you only need the key
}

export function loadCoursesSuccess(courses) {
    return { type: types.LOAD_COURSES_SUCCESS, courses };
}

//Thunks:
// a Thunk always returns a funciton that accepts a dispatch:
export function loadCourses() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      throw error;
    });
  };
}

export function saveCourse(course){
  return function(dispatch, getState) {
    dispatch(beginAjaxCall());
    courseApi.saveCourse(course).then(savedCourse => {
      course.id ? dispatch(updateCourseSuccess(savedCourse)) :
      dispatch(createCourseSuccess(savedCourse));
    }).catch(error => {
      throw(error);
    });
  };
}
