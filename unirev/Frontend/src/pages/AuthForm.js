import React, { useState } from 'react';

function AuthForm({ onLogin }) {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and sign up
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCredentials({
      ...credentials,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submit behavior
    const apiPath = isLogin ? '/api/login' : '/api/signup';
    try {
      const response = await fetch(apiPath, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      });

      const data = await response.json();
      if (data.success) {
        console.log(isLogin ? 'Login successful' : 'Sign up successful');
        onLogin(true); // Update the login state in the parent component or context
        if (!isLogin) {
        }
      } else {
        console.error(isLogin ? 'Login failed' : 'Sign up failed');
        alert(isLogin ? 'Login failed' : 'Sign up failed'); // Show error message
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>{isLogin ? 'Log In' : 'Sign Up'}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleInputChange}
          placeholder="Username"
          required
        />
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleInputChange}
          placeholder="Password"
          required
        />
        <button type="submit">{isLogin ? 'Log In' : 'Sign Up'}</button>
      </form>
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? 'No account? Sign up' : 'Have an account? Log in'}
      </button>
    </div>
  );
}

export default AuthForm;
