import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Banner from './components/Banner';
import Differences from './components/Differences';
import Fields from './components/Fields';
import Contact from './components/Contact';
import Feedbacks from './components/Feedbacks';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/contato') {
      // Aguarda um pouco para garantir que a página foi renderizada
      setTimeout(() => {
        const element = document.getElementById('contact');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else if (location.pathname === '/sobre') {
      setTimeout(() => {
        const element = document.getElementById('about');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else if (location.pathname === '/areas-de-atuacao') {
      setTimeout(() => {
        const element = document.getElementById('fields');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else if (location.pathname === '/') {
      // Para a página inicial, rola para o topo
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  }, [location.pathname]);

  return null;
}

function MainContent() {
  return (
    <>
      <ScrollToSection />
      <Header />
      <Banner />
      <About />
      <Differences />
      <Fields />
      <Contact />
      <Feedbacks />
      <Footer />
      <WhatsAppButton />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/contato" element={<MainContent />} />
        <Route path="/sobre" element={<MainContent />} />
        <Route path="/areas-de-atuacao" element={<MainContent />} />
      </Routes>
    </Router>
  );
}

export default App;
