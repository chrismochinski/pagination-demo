import React from "react";
import "./App.css";
import { data } from '../public/data/data'

const logo = "https://freesvg.org/img/Gerald_G_Fast_Food_Lunch_Dinner_(FF_Menu)_6.png";

function App() {

  console.log('data is:', data)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Wut it do.</p>
        <a className="App-link" href="http://chrismochinski.com" target="_blank" rel="noopener noreferrer">
          Mo
        </a>
      </header>
    </div>
  );
}

export default App;
