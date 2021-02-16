import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import Perfil from './Pages/Perfil';
import Gamehub from './Pages/Gamehub';
import PaginaEdificio from './Pages/PaginaEdificio';
import Mapeadores from './Pages/Mapeadores';
import AdicionarEdificio from './Pages/AdicionarEdificio';
import Homepage from './Pages/Homepage';
import './Styles/Geral.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/perfil" component={Perfil}/>
        <Route exact path="/gamehub" component={Gamehub}/>
        <Route exact path="/edificio" component={PaginaEdificio}/>
        <Route exact path="/mapeadores" component={Mapeadores}/>
        <Route exact path="/novo" component={AdicionarEdificio}/>
        <Route exact path="/homepage" component={Homepage}/>
      </Switch>
    </Router>
  );
}

export default App;
