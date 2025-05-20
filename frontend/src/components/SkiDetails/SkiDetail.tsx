import { useNavigate, useParams } from "react-router-dom";
import "./ski-details.css";
import axios from "axios";
import { useEffect, useState } from "react";
import type { Ski } from "../../types/types";

export const SkiDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [ski, setSki] = useState<Ski | null>(null);

  const handleClick = () => {
    navigate("/nuoma");
  };

  useEffect(() => {
    const fetchSki = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3007/api/skis/${id}`
        );
        setSki(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSki();
  }, []);

  if (!ski) {
    return <p>Loading...</p>;
  }

  return (
    <div className="ski-detail">
      <div className="ski-detail-container">
        <div className="ski-detail-left">
          <img src={ski.image} alt="Ski" className="ski-detail-image" />
        </div>
        <div className="ski-detail-right">
          <div className="ski-header">
            <h2>{id}</h2>
            <p className="ski-year">{ski.year}</p>
          </div>
          <div className="ski-specs">
            <div className="ski-spec">
              <span className="spec-label">{ski.model}</span>
              <span className="spec-value">{ski.length}</span>
            </div>
            <div className="ski-spec">
              <span className="spec-label">Tipas</span>
              <span className="spec-value">Ski</span>
            </div>
            <div className="ski-spec">
              <span className="spec-label">Kaina</span>
              <span className="spec-value">Ski</span>
            </div>
            <div className="ski-actions">
              <div className="spec-item">
                <button className="button button-primary">Rezervuoti</button>
                <button
                  className="button button-secondary"
                  onClick={handleClick}
                >
                  Grizti i nuomos pasiulymus
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
