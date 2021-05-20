import './App.css';
import React, {useEffect} from "react";
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import top from './pages/Top';
import bar from './charts/bar';
import PieChart from './charts/circle';
import GeoChart from './charts/geo';
import ScatterChart from './charts/scatter';
import Header from './components/Header';
import Footer from './components/Footer';
import Tabs from './components/Tabs';
import {fetchPrefectures} from './api';


const Router = () => (
  <BrowserRouter>
  <Tabs/>
    <Switch>
      <Route exact path ="/" component={top}/>
      <Route exact path ="/bar" component={bar}/>
      <Route exact path = '/pie' component={PieChart}/>
      <Route exact path ='/scatter' component={ScatterChart}/>
     
    </Switch>
  </BrowserRouter>
);

function App() {
  
  useEffect(() => {
    console.log("dd");
    fetchPrefectures().then(data => {
      console.log(data);
    });
  }, []);
  
  return (
    <div>
      <Header/>
      <Router/>
      <Footer/>
    </div>
  );
}

export default App;
