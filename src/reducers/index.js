import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';

const rootReducer = combineReducers({
  // courses: courses
  // investivate shorthand property name
  authors,
  courses
});

export default rootReducer;
