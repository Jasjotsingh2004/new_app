import React from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    switch (id) {
      case 'box1':
        navigate('/webdesign');
        break;
      case 'box2':
        navigate('/responsive');
        break;
      case 'box3':
        navigate('/javascript');
        break;
      case 'box4':
        navigate('/frontend');
        break;
      case 'box5':
        navigate('/datavisualization');
        break;
      case 'box6':
        navigate('/backend');
        break;
      case 'box7':
        navigate('/qualityassurance');
        break;
      default:
        break;
    }
  };

  return (
    <div className="welcome">
      <h2>Welcome to FreeCodeCamp.org</h2>
    
      {/* Quote */}
      <div className="quote">
        <p>I have not failed, I've just found 10,000 ways </p>
        <p> that won't work.</p>
        <p>- Thomas A. Edison</p>
      </div>
      <div className="boxscape">    </div>
      
      {/* Rectangular boxes as buttons */}
      <div className="box-container">
        <button className="box" id='box1' onClick={() => handleClick('box1')}>
          New Responsive Web Design Certification (300 hours)
        </button>
        <button className="box" id='box2' onClick={() => handleClick('box2')}>
          Legacy Responsive Web Design Certification (300 hours)
        </button>
        <button className="box" id='box3' >
          Javascript Algorithms and Data Structure (300 hours)
        </button>
        <button className="box" id='box4' >
          Frontend Development Libraries Certification (300 hours)
        </button>
        <button className="box" id='box5' >
          Data Visualization Certification (300 hours)
        </button>
        <button className="box" id='box6'>
          Back End Development and APIs Certification (300 hours)
        </button>
        <button className="box" id='box7' >
          Quality Assurance Certification (300 hours)
        </button>
      </div>
    </div>
  );
}

export default Welcome;
