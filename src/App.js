import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './pages/Signup/Signup';
import Homepage from './pages/Homepage/Homepage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Signup/>} />
      <Route path="/home" element={<Homepage/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;


