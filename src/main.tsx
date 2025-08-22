import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Header from './components/Header';
import About from './components/About';
import Banner from './components/Banner';
import './assets/index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <Banner />
    <About />
  </StrictMode>
);
