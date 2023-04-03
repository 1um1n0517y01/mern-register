import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegistrationForm from './components/RegistrationForm.tsx';
import Home from './components/Home.tsx';

function App() {
  return (
    <Router>
      <div className='App'>
        <div className='App'>
          <Routes>
            <Route exact path='/' element={<RegistrationForm />} />
            <Route path='/home' element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
