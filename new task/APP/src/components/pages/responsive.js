import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './pages.css';

const ResponsiveDesign = () => {
  return (
    <div className="responsive-design">
      <h2>Web Responsive Certification Courses</h2>
      <div className="course-list">
        <div className="course">
          <h3>Course Title 1</h3>
          <p>Description of course 1.</p>
        </div>
        <div className="course">
          <h3>Course Title 2</h3>
          <p>Description of course 2.</p>
        </div>
        <div className="course">
          <h3>Course Title 3</h3>
          <p>Description of course 3.</p>
        </div>
      </div>
      {/* Add a back button */}
      <Link to="/welcome">
        <button className="back-button">Back to Welcome Page</button>
      </Link>
    </div>
  );
}

export default ResponsiveDesign;
