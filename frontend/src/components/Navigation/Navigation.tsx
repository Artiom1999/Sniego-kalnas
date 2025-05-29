import "./navigation.css";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="navigation-container">
        <Link to="/" className="navigation-logo">
          <img
            src="https://sniegokalnas.lt/wp-content/uploads/2024/08/cropped-lipdukas-m2Wbjjk74vCOZBkk.avif"
            alt="logo"
          />
        </Link>
        <ul>
          <li>
            <Link to="/">Pagrindinis</Link>
          </li>
          <li>
            <Link to="/nuoma">Nuoma</Link>
          </li>

          <li>
            <Link to="/serisas">Servisas</Link>
          </li>
          <li>
            <Link to="/apie-mus">Apie mus</Link>
          </li>

          <>
            <li className="login-item">
              <Link to="/login">Prisijungti</Link>
            </li>
          </>
        </ul>
      </div>
    </nav>
  );
};
