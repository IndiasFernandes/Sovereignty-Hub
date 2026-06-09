import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './site.css';
import './consultation.css';
import './admin.css';
import './partners.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
