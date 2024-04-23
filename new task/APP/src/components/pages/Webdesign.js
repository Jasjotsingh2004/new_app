import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './pages.css';

const WebDesign = () => {
  // Sample course data
  const courses = [
    {
      id: 1,
      title: 'HTML Fundamentals',
      description: 'Learn the basics of HTML, the foundation of web design.',
      duration: '5 hours',
      instructor: 'John Doe',
      price: '$29.99'
    },
    {
      id: 2,
      title: 'CSS Styling Techniques',
      description: 'Explore advanced CSS techniques for styling web pages.',
      duration: '8 hours',
      instructor: 'Jane Smith',
      price: '$39.99'
    },
    {
      id: 3,
      title: 'Responsive Web Design',
      description: 'Master responsive design principles for building mobile-friendly websites.',
      duration: '10 hours',
      instructor: 'James Brown',
      price: '$49.99'
    }
    // Add more courses as needed
  ];

  return (
    <div className="web-design">
      <h2>Web Design Courses</h2>
      <div className="course-list">
        {courses.map(course => (
          <div className="course" key={course.id}>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <p><strong>Duration:</strong> {course.duration}</p>
            <p><strong>Instructor:</strong> {course.instructor}</p>
            <p><strong>Price:</strong> {course.price}</p>
          </div>
        ))}
      </div>
      {/* Use Link component to navigate */}
      <Link to="/welcome">
        <button className="back-button">Back to Welcome Page</button>
      </Link>
    </div>
  );
}

export default WebDesign;
