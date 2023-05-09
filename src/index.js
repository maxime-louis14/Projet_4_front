import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Compte from './pages/Compte';
import Layout from './pages/Layout';
import Inscription from './pages/inscription';
import Connextion from './pages/connextion';
import Photos from './pages/Photos';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/compte" element={<Compte />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/connextion" element={<Connextion />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
