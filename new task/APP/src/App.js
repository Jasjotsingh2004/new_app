// import React from 'react'
// import Navbar from './components/navbar';
// import Body from './components/body';
// import Courses from './components/Courses';
// // import { Link } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// export const App = () => {

//   return(
// <>

// return (
//         <div>
//             <Navbar />
//             <Body />
//         </div>
//     );





// </>
//   ) 
// }

// export default App;

import React from 'react';
import Navbar from './components/navbar';
import Body from './components/body';
import Courses from './components/Courses';
import Welcome from './components/Welcome';
import Signin from './components/signin'
import { Route, Routes } from 'react-router-dom';

import Webdesign from './components/pages/Webdesign';
import Responsive from './components/pages/responsive';
import javascript from './components/javascript';
import SignUp from './components/signup';

const App = () => {
  return (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/signin" element={<Signin />} />
          
          <Route path="/webdesign" element={<Webdesign/>}/>
          <Route path='/responsive' element={<Responsive/>}/>
          <Route path='/javascript' element={<javaScript/>}/>
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </>
  );
}

export default App;