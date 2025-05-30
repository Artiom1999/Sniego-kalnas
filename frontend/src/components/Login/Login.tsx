import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom"; // 👈 pridėta
import "../Register/register.css";
import { AuthContext } from "../../context/AuthContext";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, error } = useContext(AuthContext);
  const navigate = useNavigate(); // 👈 pridėta

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await login(email, password); // 👈 gautas rezultatas
    if (success) {
      navigate("/dashboard"); // 👈 naviguojam tik jei sėkmingai prisijungė
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-box">
        <div className="auth-form-side">
          <h2>Prisijungimas</h2>

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label htmlFor="email">El. paštas</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Slaptažodis</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="register-button">
              Prisijungti
            </button>

            {error && <p className="error-message">{error}</p>}
          </form>

          <div className="login-link">
            Neturite paskyros? <Link to="/register">Registruokitės</Link>
          </div>
        </div>

        <div className="auth-image-side"></div>
      </div>
    </div>
  );
};
