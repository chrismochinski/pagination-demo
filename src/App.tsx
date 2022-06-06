import { AppShell, Footer, Group, Navbar, Table, Text } from '@mantine/core';
import { useEffect, useState } from 'react';
import './App.css';
import { data } from './data/data';
import TableItem from './TableItem';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [resultsPerPage, setResultsPerPage] = useState(10);
  const [totalResults, setTotalResults] = useState(data);

  useEffect((): void => {
    console.log('app.tsx, data (as state) -', totalResults);
  }, [totalResults]);

  return (
    <Group className="App">
      <AppShell
        padding="xs"
        navbar={
          <Navbar
            fixed={true}
            height="md"
            px="lg"
            sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}
          >
            <Text className="nav-text" p="md">
              Home
            </Text>
            <Text className="nav-text" p="md">
              Stuff
            </Text>
            <Text className="nav-text" p="md">
              Things
            </Text>
            <Text className="nav-text" p="md">
              Crap
            </Text>
          </Navbar>
        }
        footer={
          <Footer height={60} p="md">
            <Text>Footer</Text>
          </Footer>
        }
      >
        <header className="App-header">
          <Text className="main-header">PEEPLZ</Text>
        </header>
        <Group className="container">
          <Table className="mantineTable" verticalSpacing="sm" fontSize="xl" striped>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <TableItem item={item} />
              ))}
            </tbody>
          </Table>
        </Group>
      </AppShell>
    </Group>
  );
}

export default App;
