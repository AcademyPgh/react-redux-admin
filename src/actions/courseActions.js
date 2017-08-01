import * as types from './actionTypes'

export function createCourse(course) {
  return { type: types.CREATE_COURSE , course }; // omitted value 'course: course'. In ES6, you only need the key
}
