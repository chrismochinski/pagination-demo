import { useEffect } from 'react';
import { People, data } from './data/data';

interface Props {
  data: People[];
}

const TableItem: React.FC<Props> = ({ data }) => {
  useEffect((): void => {
    // console.log('item is:', post);
  });

  return (
    <>
      {data.map((post) => (
        <tr key={post.id} className="list-group-item">
          <td>{post.id}</td>
          <td>{post.name}</td>
          <td>{post.age}</td>
        </tr>
      ))}
    </>
  );
};

export default TableItem;
