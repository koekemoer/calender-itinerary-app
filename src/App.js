import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  Dashboard  from './components/Dashboard';
import  InitialSetup from './components/InitialSetup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InitialSetup />}/>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
