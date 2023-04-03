import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import React from 'react';
import Cookies from 'js-cookie';

interface User {
  firstName: string;
  lastName: string;
}

const Home: React.FC = () => {
  const [user, setUser] = useState<User>({ firstName: '', lastName: '' });
  const navigate = useNavigate();

  useEffect(() => {
    const jwt = Cookies.get('jwt');
    if (!jwt) {
      navigate('/');
      return;
    }

    // Make an API request to retrieve the user's information
    fetch('https://mern-register-server.onrender.com/home', {
      headers: {
        Authorization: `Bearer ${Cookies.get('jwt')}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error(error));
  }, [navigate]);

  const handleLogout = () => {
    Cookies.remove('jwt');
    navigate('/');
  };

  console.log(user);

  return (
    <div className='home'>
      <h1>
        Welcome {user.firstName} {user.lastName}
      </h1>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
};

export default Home;
