import React from 'react';
import Top_NavBar from './Top_NavBar';
import Cocktail_Card from './Cocktail_Card';
import Cocktail_Card_Container from './Cocktail_Card_Container';
import logo from './logo.svg';
import Header from './Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Header></Header>
      <Top_NavBar></Top_NavBar>
    </div>
  );
}

export default App;
