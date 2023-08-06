import { useParams } from "react-router-dom";
import { useGetCatByNameQuery } from "../../services/catsService";
import CatDetails from "../../features/Cat/CatDetails";

const CatPage = () => {
  const { name } = useParams();
  const { data, isLoading } = useGetCatByNameQuery(name, {
    skip: !name,
  });

  return (
    <div>
      {isLoading ? <div>loading...</div> : data && <CatDetails cat={data} />}
    </div>
  );
};

export default CatPage;
