import React from 'react';
import Form from './pages/Form';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TresDiasRecife from './Components/Roteiro/Recife/TresDias';
import Home from './pages/Home';

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/roteiro" element={<TresDiasRecife />} />
        <Route path="/cadastro" element={<Form />} />
        {/* <Route path="/posts/:id" element={<Posts />} />
        <Route path="*" element={<Pagina404 />}></Route> */}
        <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
