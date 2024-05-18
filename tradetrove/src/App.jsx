import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LogIng from './componentes/LogIng';
import NavBar from './componentes/NavBar';
import Principal from './componentes/Principal';
import SingUp from './componentes/SingUp';
import SobreNosotros from './componentes/SobreNosotros';
import { Sockect } from './pages/principal';

function App() {
  const [activoPrin, setActivoPrin] = useState(false);

  return (
    <BrowserRouter>
      {activoPrin ? <NavBar NameButton='Eimy' /> : <NavBar NameButton='Jefernne' />}
      <Routes>
        <Route path='/' element={<Sockect />} />
        <Route path='/about' element={<SingUp />} />
        <Route path='/login' element={<LogIng />} />
        <Route path='/sobreNosotros' element={<SobreNosotros />} />
        <Route path='/Principal' element={<Principal />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
