export function createCourse(course) {
  return { type: 'CREATE_COURSE', course: course }; // could have omitted value 'course'. In ES6, you only need the key
}
