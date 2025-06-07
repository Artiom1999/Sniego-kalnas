import { useNavigate } from "react-router-dom";
import type { Ski } from "../../types/types";
import "./ski-card.css";

interface SkiCardProps {
  ski: Ski;
}

export const SkiCard = ({ ski }: SkiCardProps) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/skis/${ski._id}`);
  };
  return (
    <div className="ski-card" onClick={handleClick}>
      <img src={ski.image} alt="Ski" className="ski-card-image" />
      <div className="ski-card-content">
        <h3>
          {ski.make} {ski.model} {ski.length}
        </h3>
        <p>{ski.category}</p>
      </div>
    </div>
  );
};
