import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Header from './components/Header';
import Banner from './components/Banner';
import './assets/index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <Header />
    <Banner />
  </StrictMode>
);
