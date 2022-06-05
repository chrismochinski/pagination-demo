import React, { useEffect } from "react";
import "./App.css";
import { data } from "./data/data";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>PEEPLZ</h2>
      </header>
      <div className="container">
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
      </div>
    </div>
  );
}

export default App;
