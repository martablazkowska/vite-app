import List from "../../components/ui/List/List";
import { Cat, useGetAllQuery } from "../../services/catsService";

const mapDataToList = (data: Cat[]) => {
  return data.map(({ name }) => ({
    label: name,
    link: `/cats/${name}`,
  }));
};

const CatsPage = () => {
  const { data, isLoading } = useGetAllQuery();

  return (
    <div>
      {isLoading ? (
        <div>loading...</div>
      ) : (
        <div>{data && <List items={mapDataToList(data)} />}</div>
      )}
    </div>
  );
};

export default CatsPage;
