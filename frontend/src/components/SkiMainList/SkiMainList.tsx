import { useNavigate } from "react-router-dom";
import "./ski-main-list.css";

export const SkiMainList = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/nuoma");
  };

  return (
    <>
      <div className="hero">
        <h1>Leiskitės į nuotykius su geriausiais pasiūlymais - tik pas mus!</h1>
        <p onClick={handleClick}>PREKIŲ ASORTIMENTAS</p>
      </div>
      <div className="section">
        <div className="section-title">
          <h2>Nuomos pasiulymai</h2>
          <p>Perziurekite musu slidziu kolekcija</p>
        </div>
      </div>
    </>
  );
};
