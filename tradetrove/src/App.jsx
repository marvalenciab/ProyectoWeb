import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Sockect } from "./pages/principal";
import SingUp from "./componentes/SingUp";
import NavBar from "./componentes/NavBar";
import { useState } from "react";
import LogIng from "./componentes/LogIng";
import SobreNosotros from "./componentes/SobreNosaotros";
import Principal from "./componentes/Principal";
function App() {
    const [activoPrin, setactivoPrin] = useState(false)

  return (
    <BrowserRouter>
    {
      activoPrin === true ? <NavBar NameButton='Eimy'></NavBar> :<NavBar NameButton='Jefernne'></NavBar>
    }
      
      <Routes>
        <Route path="/" element={<Principal></Principal>}></Route>
        <Route path="/singLog"  element={<Sockect/>}></Route>
        <Route path='/about' element={<SingUp></SingUp>} />
        <Route path='/login' element={<LogIng></LogIng>} />
        <Route path='/sobreNosotros' element={<SobreNosotros></SobreNosotros>} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
