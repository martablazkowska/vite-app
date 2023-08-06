import { Link } from "react-router-dom";

type TListItem = {
  label: string;
  link: string;
};

interface IListProps {
  items: TListItem[];
}

const List = ({ items }: IListProps) => {
  return (
    <ul>
      {items.map((item) => (
        <li className="p-1" key={`LIST_ITEM_${item.label}`}>
          <Link to={item.link}>{item.label}</Link>
        </li>
      ))}
    </ul>
  );
};

export default List;
