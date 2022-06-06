import { AppShell, Footer, Group, Navbar, Table, Text, Pagination } from '@mantine/core';
import { useEffect, useState } from 'react';
import './App.css';
import { data } from './data/data';
import TableItem from './TableItem';
import PaginationComponent from './PaginationComponent';

function App() {
  // const [people, setPeople] = useState<People[]>(data); // equivalent to "posts" in example
  const [currentPage, setCurrentPage] = useState(1); //from example verbatim
  const [resultsPerPage, setResultsPerPage] = useState(10); // "posts per page" in example
  const [totalPeople, setTotalPeople] = useState(data.length); // "total posts" in example

  useEffect((): void => {
    console.log('data is:', data);
  }, [data]);

  // Get current posts
  const indexOfLastPerson = currentPage * resultsPerPage;
  const indexOfFirstPerson = indexOfLastPerson - resultsPerPage;
  const currentPeople = data.slice(indexOfFirstPerson, indexOfLastPerson);

  console.log('currentPeople/persons is:', currentPeople);

  const paginate = (pageNumber: number) => {
    console.log('in paginate function');
    setCurrentPage(pageNumber)
  }

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
              <TableItem data={currentPeople} />
            </tbody>
          </Table>
        </Group>
        <Group className="pagination-wrapper">
          <PaginationComponent
          paginate={paginate}
            data={data}
            totalPeople={data.length}
            resultsPerPage={resultsPerPage}
            currentPage={currentPage}
          />
        </Group>
      </AppShell>
    </Group>
  );
}

export default App;
