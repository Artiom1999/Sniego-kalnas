import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./navigation.css";
import { Link } from "react-router-dom";

export const Navigation = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);

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
            <Link to="/servisas">Servisas</Link>
          </li>
          <li>
            <Link to="/about-us">Apie mus</Link>
          </li>
          {isAuthenticated ? (
            <>
              <li>
                <Link to="/dashboard">Profilis</Link>
              </li>
              <li>
                <button onClick={logout} className="logout-button">
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="login-item">
                <Link to="/login">Prisijungti</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};
