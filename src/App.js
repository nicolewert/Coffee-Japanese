import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register' 
import CoffeeLesson from './pages/CoffeeLesson/CoffeeLesson'
import UserProfile from './pages/UserProfile/UserProfile';
import PrivateRoute from './components/ProtectiveRouting/PrivateRoute';
import PageNotFound from './pages/PageNotFound/PageNotFound'

//Redux 
import {Provider} from 'react-redux'; 
import {store, persistor} from './store'; 
import { PersistGate } from 'redux-persist/integration/react'


function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Routes>
        
              <Route path="/" element={<Login/>}/>

              <Route path="/register" element={<Register/>}/>

              <Route 
                path="/home" 
                element={<PrivateRoute component ={Home}/>}
              />

              <Route 
                path="/coffee-lesson" 
                element={<PrivateRoute component={CoffeeLesson}/>}
              />

              <Route 
                path="/user-profile" 
                element={<PrivateRoute component={UserProfile}/>}
              />

              <Route path="*" element={<PageNotFound/>}></Route>

          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
