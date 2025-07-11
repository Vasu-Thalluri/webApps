import React from 'react'
import { useState } from 'react';
import { jsonApi } from '../services/api';
import { useDispatch } from 'react-redux';
import { login } from '../redux/slices/userSlice';

const Signup = ()=> {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSignup = async (e)=> {
    e.preventDefault();
    try {
      const res = await jsonApi.post('/users', {name, email, password});
      console.log(res)
      console.log(res.data);
      dispatch(login({email}));
    }catch(error) {
      console.error('Signup failed:', error);
    }
  }

  return (
    <div>
        <h1>Signup</h1>
        <form onSubmit={handleSignup}>
          <input type='text' name='name' placeholder='Enter Your Name' required value={name} onChange={(e)=> setName(e.target.value)}/>
          <input type='email' name='email' placeholder='Enter Your Email' required value={email} onChange={(e)=> setEmail(e.target.value)}/>
          <input type='password' name='password' placeholder='Enter Your password' required value={password} onChange={(e)=> setPassword(e.target.value)}/>
          <button type='submit'>Signup</button>  
        </form>
    </div>
  )
}
export default Signup;
