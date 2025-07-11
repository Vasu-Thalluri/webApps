import React from 'react'
import { useState } from 'react';
import {useDispatch} from 'react-redux';
import {login} from '../redux/slices/userSlice';
import { jsonApi } from '../services/api';
import { useNavigate } from 'react-router-dom';

const Login = ()=> {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const value = e.target;
    console.log(typeof(value));
    setError('');
    getUser();
  }

  function getUser() {
    jsonApi.get('/users')
      .then(response => {
        console.log(response);
        console.log('API finished');// This runs after the API call finishes. This cosole is for how asynchronous code works
        const users = Array.isArray(response.data) ? response.data : [];
        const matchedUser = users.find(
          user => user.email === email && user.password === password
        );
        if (matchedUser) {
          console.log('Login successful');
          localStorage.setItem('user', JSON.stringify({ email }));
          setEmail(matchedUser.email);
          dispatch(login({ email }));
          setError('');
          setSuccessMsg('Login successful');
          navigate('/home'); // navigate to home
        } else {
          setError('Invalid email or password');
        }
      }).catch(error => {
        console.error('Error fetching users:', error);
        setError('An error occurred while logging in');
      });
      console.log('This runs immediately after jsonApi.get, before the API finishes');
  }
  
  return (
    <div>
        <h1>Login</h1>
        <form onSubmit = {handleLogin}>
          <input type='email' name='email' value={email} onChange={(e)=> setEmail(e.target.value)} placeholder = "Enter Your Email here" required/>
          <input type= 'password' name='password' value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="Enter Your Password here" required/>
          <button type="submit">Login</button>
          {error && <p style={{color: 'red'}}>{error}</p>}
          {successMsg && <p style={{color: 'green'}}>{successMsg}</p>}
        </form>
    </div>
  )
}
export default Login;
