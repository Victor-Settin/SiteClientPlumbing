import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import About from './pages/About';
// import Services from './pages/Services';
// import Contact from './pages/Contact';
// import Gallery from './pages/Gallery';  // Importando a nova página de galeria
// import Footer from './components/Footer';
// import Header from './components/Header';
import Coming from './pages/Coming';

function App() {
  return (
    // <Router>
    //   <div className="App">
    //     <Header />
        
    //     {/* Definindo as rotas principais */}
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/about" element={<About />} />
    //       <Route path="/services" element={<Services />} />
    //       <Route path="/contact" element={<Contact />} />
    //       <Route path="/gallery/:serviceName" element={<Gallery />} />  {/* Rota para a galeria */}
    //     </Routes>
        
    //     {/* Rodapé que será exibido em todas as rotas */}
    //     <Footer />
    //   </div>
    // </Router>
    <Coming />
  );
}

export default App;
