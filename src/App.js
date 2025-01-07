import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react'; // Importe o Analytics
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';  
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        
        {/* Definindo as rotas principais */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery/:serviceName" element={<Gallery />} />
        </Routes>
        <Footer />
        
        {/* Adicione o Analytics aqui */}
        <Analytics />
      </div>
    </Router>
  );
}

export default App;
