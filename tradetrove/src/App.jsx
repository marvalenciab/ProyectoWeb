import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LogIng from './componentes/LogIng';
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
        <Route path='/' element={<Sockect />}></Route>
        <Route path='/about' element={<SingUp></SingUp>} />
        <Route path='/login' element={<LogIng></LogIng>} />
        <Route path='/sobreNosotros' element={<SobreNosotros></SobreNosotros>} />
        <Route path='/Principal' element={<Principal></Principal>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
