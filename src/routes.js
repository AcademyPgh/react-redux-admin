import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import CoursesPage from './components/course/CoursesPage';
import ManageCoursePage from './components/course/ManageCoursePage'; //eslint-disable-line import/no-named-as-default
import AuthorsPage from './components/author/AuthorsPage';
import ManageAuthorPage from './components/author/ManageAuthorPage';
import AboutPage from './components/about/AboutPage';
import My404Component from './components/common/My404Component.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="authors" component={AuthorsPage} />
    <Route path="author" component={ManageAuthorPage} />
    <Route path="author/:id" component={ManageAuthorPage} />
    <Route path="courses" component={CoursesPage}/>
    <Route path="course/:id" component={ManageCoursePage}/>
    <Route path="course" component={ManageCoursePage}/>
    <Route path="about" component={AboutPage}/>
    <Route path="*" exact={true} component={My404Component} />
  </Route>
);
