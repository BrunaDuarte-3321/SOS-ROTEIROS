import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Roteiro from './Components/Roteiro';
import Form from './pages/Form';
import Home from './pages/Home';

const Rotas = () => {
  return (
    <BrowserRouter>
      
      <Routes>
        
        <Route path="/roteiro" element={<Roteiro />} />
        <Route path="/cadastro" element={<Form />} />
        {/* <Route path="/posts/:id" element={<Posts />} />
        <Route path="*" element={<Pagina404 />}></Route> */}
        <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
