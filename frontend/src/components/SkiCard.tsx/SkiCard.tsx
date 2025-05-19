import "./ski-card.css";
import type { Ski } from "../SkiRentList/SkiRentList";

interface SkiCardProps {
  ski: Ski;
}

export const SkiCard = ({ ski }: SkiCardProps) => {
  return (
    <div className="ski-card">
      <img src={ski.image} alt="Ski" className="ski-card-image" />
      <div className="ski-card-content">
        <h3>
          {ski.model} {ski.length}
        </h3>
        <p>{ski.year}</p>
      </div>
    </div>
  );
};
