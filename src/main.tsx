import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Header from './components/Header';
import About from './components/About';
import Banner from './components/Banner';
import Differences from './components/Differences';
import Fields from './components/Fields';
import './assets/index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <Banner />
    <About />
    <Differences />
    <Fields />
  </StrictMode>
);
