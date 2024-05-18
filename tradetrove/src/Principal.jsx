
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Barra from './componentes/BarraPrin';
import Cuerpo from './componentes/Cuerpo';
import SobreNosotros from './componentes/SobreNosotros';
import { Sockect } from './pages/principal';

function App() {
  const [activoPrin, setActivoPrin] = useState(false);

  return (
    <BrowserRouter>
  {activoPrin ? <Barra NameButton='Eimy' /> : <Barra NameButton='Jefernne' />}
  <Routes>
    <Route path='/' element={<Sockect />} />
    <Route path='/Cuerpo' element={<Cuerpo />} />
    <Route path='/sobreNosotros' element={<SobreNosotros />} />
  </Routes>
</BrowserRouter>;
  );
}
export default App;