import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from '../config/firebase'; 
import { useNavigate } from 'react-router-dom';
import './navbar.css'; // Import navbar.css


function SignUp() {
  const navigate = useNavigate()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(email, password);
      navigate('/signin')
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSignInClick = () => {
    navigate('/signin'); 
  };

  return (
    <div>
      <br /> <br /> br
      <form className="sign-up-form" onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
        {error && <p>{error}</p>}
        <p>Already a user? <button onClick={handleSignInClick}>Sign in</button></p>
      </form>
     
    </div>
  );
}

export default SignUp;
