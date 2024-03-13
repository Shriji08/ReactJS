import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [loginData, setLoginData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [loginStatus, setLoginStatus] = useState({ success: false, error: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleLogin = () => {
    const correctName = 'Shriji';
    const correctEmail = 'shriji@gmail.com';
    const correctPassword = 'Shri123';

    if (
      loginData.name === correctName &&
      loginData.email === correctEmail &&
      loginData.password === correctPassword
    ) {
      setLoginStatus({ success: true, error: '' });
      onLogin(loginData.name);
    } else {
      setLoginStatus({ success: false, error: 'Invalid credentials' });
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={loginData.name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={loginData.email}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
      {loginStatus.success ? (
        <p>Welcome, {loginData.name}!</p>
      ) : (
        <p style={{ color: 'red' }}>{loginStatus.error}</p>
      )}
    </div>
  );
};

export default Login;
