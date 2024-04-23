import React, { useState } from 'react';
import { signInWithEmailAndPassword } from '../config/firebase';
import { useNavigate } from 'react-router-dom';
import './navbar.css'; // Import navbar.css

function SignInForm() {
  const navigate = useNavigate()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(email, password);
      navigate('/Welcome')
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSignUpClick = () => {
    navigate('/signup'); 
  };

  return (
    <div>
      <br /> <br /> <br />
    
      <form className="sign-in-form" onSubmit={handleSubmit}>
      <h2>Sign In</h2>
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
      
        <button type="submit">Sign In</button>
        {error && <p>{error}</p>}
        <p>Not a user? <button onClick={handleSignUpClick}>Sign up</button></p>
      </form>
    </div>
  );
}

export default SignInForm;
