import React from 'react'; 
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
import './App.css';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register'
import CoffeeLesson from './pages/CoffeeLesson/CoffeeLesson'

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/login" element={<Login/>}>
        </Route>

        <Route path="/register" element={<Register/>}>
        </Route>

        <Route path="/home" element={<Home/>}>
        </Route>

        <Route path="/coffee-lesson" element={<CoffeeLesson/>}>
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
