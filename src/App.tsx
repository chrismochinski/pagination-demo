import React from "react";
import "./App.css";
import { data } from "./data/data";

const logo = "https://freesvg.org/img/Gerald_G_Fast_Food_Lunch_Dinner_(FF_Menu)_6.png";

function App() {
  console.log("data is:", data);

  data.map((item) => {});

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>PEEPLZ</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
        
          <tbody>
            {data.map((item) => (
              <tr>
                <td>{item.name}</td>
                <td>{item.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <a className="App-link" href="http://chrismochinski.com" target="_blank" rel="noopener noreferrer">
          Mo
        </a>
      </header>
    </div>
  );
}

export default App;
