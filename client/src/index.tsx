import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import SignInSide from './pages/auth/signInSide';
import Home from './pages/home/home';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>  
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);
