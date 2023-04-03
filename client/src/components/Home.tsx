import React from 'react';
import './Home.css';

interface HomeProps {
  firstName: string;
  lastName: string;
  onLogout: () => void;
}

const Home: React.FC<HomeProps> = ({ firstName, lastName, onLogout }) => {
  return (
    <div className='home'>
      <h1>
        Welcome {firstName} {lastName}
      </h1>
      <button onClick={onLogout}>Log Out</button>
    </div>
  );
};

export default Home;
