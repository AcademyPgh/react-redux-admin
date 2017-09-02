import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import LoadingDots from './LoadingDots';
import {connect} from 'react-redux';

const Header = ({loading, authors, courses}) => {
  return (
    <div>
      <nav>
        <IndexLink to="/" activeClassName="active">Home</IndexLink>
        {" | "}
        <Link to="/authors" activeClassName="active">Authors: {authors.length}</Link>
        {" | "}
        <Link to="/courses" activeClassName="active">Courses: {courses.length}</Link>
        {" | "}
        <Link to="/about" activeClassName="active">About</Link>
        {loading && <LoadingDots interval={100} dots={20}/>}
      </nav>
    </div>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired,
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    courses: state.courses,
    authors: state.authors
  };
}

export default connect(mapStateToProps)(Header);
