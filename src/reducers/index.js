import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  // courses: courses
  // investivate shorthand property name
  authors,
  courses,
  ajaxCallsInProgress
});

export default rootReducer;
