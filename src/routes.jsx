import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Roteiro from './Components/Roteiro';
import Cadastro from './pages/Cadastro';
import Home from './pages/Home';

const Rotas = () => {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/roteiro" element={<Roteiro />} />
        {/* <Route path="/posts/:id" element={<Posts />} />
        <Route path="*" element={<Pagina404 />}></Route> */}
        <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
