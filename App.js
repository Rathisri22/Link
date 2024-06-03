import logo from './logo.svg';
import React from 'react'; 
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './router/Home';
import About from './router/About';
import Services from './router/Services';
function App() {
   return (<div className="App"> 
   <Routes>
   <Route path = "/home" element={<Home/>}></Route>
   <Route path = "/about" element={<About/>}></Route>
   <Route path = "/services" element={<Services/>}></Route>
    </Routes>   

  </div>
   );
  }
export default App;
