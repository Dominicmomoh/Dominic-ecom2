import React from 'react'
import './App.css';
import NavBar from './Components/NavBar';
import HomePage from './Components/HomePage';
import Products from './Components/Products';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom';





function App() {
  return (
    <Router>
          <div className="App">
            <NavBar />
    
            <Routes>
              <Route path="/home" element={<HomePage />} />
              <Route path="/products" element={< Products />} />
              <Route path="/contact" element={<Contact/>} /> 
               {/* <Route path="/footer" element={<Footer />} />  */}
            </Routes>
          </div>
          {/* <Filter /> */}
          <Footer />
        </Router>    
      );
}

export default App;
