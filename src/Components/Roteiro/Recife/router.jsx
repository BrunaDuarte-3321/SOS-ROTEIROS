import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TresDiasRecife from './TresDias';
import SegundoDias from './SegundoDias';
import DiaUm from './DiaUm'
const RotasRecife = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/diatres" element={<DiaUm />} />
        <Route path="/diadois" element={<SegundoDias />} />
        {/* <Route path="/posts/:id" element={<Posts />} />
        <Route path="*" element={<Pagina404 />}></Route> */}
        <Route path="/diaum" element={<TresDiasRecife />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RotasRecife;
