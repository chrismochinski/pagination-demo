import { List } from '@mantine/core';
import { data, People } from './data/data';

interface Props {
  data: People[];
  resultsPerPage: number;
  totalPeople: number;
  currentPage: number;
  paginate: (pageNumber: number) => void;
}

const PaginationComponent: React.FC<Props> = ({ resultsPerPage, totalPeople, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPeople / resultsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination-numbers">
      <List
        center={true}
        listStyleType="none"
        withPadding={true}
        className="pagination-numbers-list"
        sx={{ display: 'flex', flexDirection: 'row' }}
        pb="xl"
      >
        {pageNumbers.map((number) => (
          <List.Item
            key={number}
            className="page-item"
            sx={{
              fontFamily: 'Zilla Slab',
              fontSize: '3em',
              color: 'white',
              textDecoration: 'none',
            }}
            px="sm"
          >
            <a onClick={() => paginate(number)} href="!#" className="page-link">
              {number}
            </a>
          </List.Item>
        ))}
      </List>
    </div>
  );
};

export default PaginationComponent;
