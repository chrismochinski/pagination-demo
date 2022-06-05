import { Group, Table } from "@mantine/core";
import "./App.css";
import { data } from "./data/data";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>PEEPLZ</h2>
      </header>
      <Group className="container">
        <Table className="mantineTable" verticalSpacing="sm" fontSize="xl" striped highlightOnHover>
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
        </Table>
      </Group>
    </div>
  );
}

export default App;
