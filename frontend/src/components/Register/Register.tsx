import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./register.css";
import { AuthContext } from "../../context/AuthContext";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const { register } = useContext(AuthContext);

  const validateForm = () => {
    setPasswordError("");

    if (password !== confirmPassword) {
      setPasswordError("Slaptažodžiai nesutampa");
      return false;
    }
    if (password.length < 6) {
      setPasswordError("Slaptažodis turi būti bent 6 simbolių ilgio");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      await register(name, email, password);
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-box">
        <div className="auth-form-side">
          <h2>Registracija</h2>
          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label htmlFor="name">Pilnas vardas ir pavardė</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

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

            <div className="form-group">
              <label htmlFor="confirmPassword">Pakartokite slaptažodį</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              {passwordError && <p className="field-error">{passwordError}</p>}
            </div>

            <button type="submit" className="register-button">
              Registruotis
            </button>
          </form>

          <div className="login-link">
            Jau turite paskyrą? <Link to="/login">Prisijunkite</Link>
          </div>
        </div>

        <div className="auth-image-side"></div>
      </div>
    </div>
  );
};
