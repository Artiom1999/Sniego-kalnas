import { useNavigate, useParams } from "react-router-dom";
import "./ski-details.css";
import axios from "axios";
import { useEffect, useState } from "react";
import type { Ski } from "../../types/types";
import { API_URL } from "../../constants/golbal";

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
        const response = await axios.get(`${API_URL}/skis/${id}`);
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
            <h2>
              {ski?.make} {ski?.model}
            </h2>
            <p className="ski-category">Men's skis </p>
            <div className="ski-description">
              <p>Nuostabios slides!</p>
            </div>
          </div>
          <div className="ski-specs">
            <div className="ski-spec">
              <span className="spec-label">Slidziu ilgis: </span>
              <span className="spec-value">{ski?.length}</span>
            </div>
            <div className="ski-spec">
              <span className="spec-label">Slidžių posūkio spindulys: </span>
              <span className="spec-value">{ski?.radius}</span>
            </div>
            <div className="ski-spec">
              <span className="spec-label">Kaina: </span>
              <span className="spec-value">{ski?.price ?? "N/A"} Eur </span>
            </div>
            <div className="ski-spec">
              <span className="spec-label">Slidinėjimo lygis: </span>
              <span className="spec-value">{ski?.level}</span>
            </div>
            <div className="ski-spec">
              <span className="spec-label">Slidžių būklė: </span>
              <span className="spec-value">{ski?.condition}</span>
            </div>
            <div className="ski-actions">
              <button className="button button-primary">Rezervuoti</button>
              <button className="button button-secondary" onClick={handleClick}>
                Grizti i nuomos pasiulymus
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
