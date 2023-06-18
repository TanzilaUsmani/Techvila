
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from './components/Nav';
import Home from './components/Home';
import Contact from './components/Contact';
import Footer from "./Footer";

import './App.css';
import './Style/nav.css';
import './Style/home.css';
import './Style/footer.css';
import './Style/contact.css';




function App() {
  return (
    <BrowserRouter basename="Techvila">
    <Nav/>
    
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Contact" element={<Contact />}/>
        
          
        
      </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
