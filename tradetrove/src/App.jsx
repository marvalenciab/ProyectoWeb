import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Compra from './componentes/Comprar';
import LogIng from './componentes/LogIng';
import Menuprincipal from './componentes/Menuprincipal';
import NavBar from './componentes/NavBar';
import Principal from './componentes/Principal';
import SingUp from './componentes/SingUp';
import SobreNosotros from './componentes/SobreNosaotros';
import { Sockect } from './pages/principal';

function App() {
  const [activoPrin, setactivoPrin] = useState(false);

  return (
    <BrowserRouter>
      {activoPrin === true ? <NavBar NameButton='Eimy'></NavBar> : <NavBar NameButton='Jefernne'></NavBar>}

      <Routes>
        <Route path='/' element={<Principal></Principal>}></Route>
        <Route path='/singLog' element={<Sockect />}></Route>
        <Route path='/about' element={<SingUp></SingUp>} />
        <Route path='/login' element={<LogIng></LogIng>} />
        <Route path='/sobreNosotros' element={<SobreNosotros></SobreNosotros>} />
        <Route path='/targeta' element={<Menuprincipal></Menuprincipal>}></Route>
        <Route path='/compra' element={<Compra></Compra>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
