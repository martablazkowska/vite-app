import { Cat } from "../../services/catsService";

interface ICatDetailsProps {
  cat: Cat;
}

const CatDetails = ({ cat }: ICatDetailsProps) => {
  return (
    <div>
      <h2>{cat.name}</h2>
      <img src={cat.image_link} className="w-1/2" />
    </div>
  );
};

export default CatDetails;
