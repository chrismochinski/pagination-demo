import React, { useEffect } from "react";
import "./App.css";
import { data } from "./data/data";

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
              <tr key={item.id}>
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
