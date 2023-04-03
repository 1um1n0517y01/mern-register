import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import './RegistrationForm.css';

interface RegistrationFormProps {
  onRegister: (
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ onRegister }) => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!firstName || !lastName || !email || !password) {
      setErrorMessage('Please fill in all fields');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setErrorMessage('Please enter a valid email address');
    } else if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters long');
    } else {
      try {
        const response = await fetch(
          'https://mern-register-server.onrender.com/register',
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ firstName, lastName, email, password }),
          }
        );
        if (response.status === 201) {
          setErrorMessage('');
          const data = await response.json();
          Cookies.set('jwt', data.token, { expires: 7 });
          navigate('/home');
          onRegister(firstName, lastName, email, password);
        } else {
          setErrorMessage('Registration failed. Please try again later.');
        }
      } catch (error) {
        setErrorMessage('Registration failed. Please try again later.');
      }
    }
  };

  return (
    <form className='registration-form' onSubmit={handleSubmit}>
      <h1>Register</h1>
      {errorMessage && <div className='error'>{errorMessage}</div>}
      <div className='form-field'>
        <label htmlFor='first-name'>First name</label>
        <input
          type='text'
          id='first-name'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className='form-field'>
        <label htmlFor='last-name'>Last name</label>
        <input
          type='text'
          id='last-name'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className='form-field'>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          id='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className='form-field'>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          id='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type='submit'>Register</button>
    </form>
  );
};

export default RegistrationForm;
