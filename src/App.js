import './App.css';
import React from "react";
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import top from './pages/Top';
import Header from './components/Header';
import Footer from './components/Footer';
import Tabs from './components/Tabs';

const Router = () => (
  <BrowserRouter>
  <Tabs/>
    <Switch>
      <Route exact path ="/" component={top}/>
    </Switch>
  </BrowserRouter>
);

function App() {
  return (
    <div>
      <Header/>
      <Router/>
      <Footer/>
    </div>
  );
}

export default App;
