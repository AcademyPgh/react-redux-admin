//set default value for state in parameters

import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = [], action) {
  switch (action.type) {
      case types.LOAD_COURSES_SUCCESS:
        return action.courses;
      case types.CREATE_COURSE_SUCCESS:
        return [...state,
          Object.assign({}, action.course)
        ].sort((courseA, courseB) => courseA.title > courseB.title );
        case types.UPDATE_COURSE_SUCCESS:
          return [...state.filter(course =>
            course.id !== action.course.id),
            Object.assign({}, action.course)
          ].sort((courseA, courseB) => courseA.title > courseB.title );
        case types.DELETE_COURSE_SUCCESS:
          return [...state.filter(course =>
            course.id !== action.course.id)
          ];
    default:
      return state;
  }
}
