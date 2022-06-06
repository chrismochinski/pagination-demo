import { People } from './data/data';

interface Props {
  item: People;
}

const TableItem: React.FC<Props> = ({ item }) => {
  return (
    <tr key={item.id}>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.age}</td>
    </tr>
  );
};

export default TableItem;
