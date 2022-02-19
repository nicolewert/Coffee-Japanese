import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register' 
import CoffeeLesson from './pages/CoffeeLesson/CoffeeLesson'
import PrivateRoute from './components/ProtectiveRouting/PrivateRoute';

//Redux 
import {Provider} from 'react-redux'; 
import store from './store'; 

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
        
            <Route path="/login" element={<Login/>}/>

            <Route path="/register" element={<Register/>}/>

            <Route 
              path="/home" 
              element={<PrivateRoute component ={Home}/>}
            />

            <Route 
              path="/coffee-lesson" 
              element={<PrivateRoute component={CoffeeLesson}/>}
            />

          <Route path="/coffee-lesson" element={<CoffeeLesson/>}>
          </Route>

        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
