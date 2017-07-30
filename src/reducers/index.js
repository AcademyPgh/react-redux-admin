import {combineReducers} from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
  // courses: courses
  // investivate shorthand property name
  courses
});

export default rootReducer;
