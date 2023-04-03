import { useState } from 'react';
import RegistrationForm from './components/RegistrationForm.tsx';
import Home from './components/Home.tsx';

const API_BASE = 'http://localhost:5000';

function App() {
  return (
    <div className='App'>
      <RegistrationForm />
      <Home />
    </div>
  );
}

export default App;
