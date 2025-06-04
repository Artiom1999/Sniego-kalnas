import { useContext } from "react";
import "./dashboard.css";
import { AuthContext } from "../../context/AuthContext";

export const Dashboard = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Profilis</h1>
        <p>Sveiki atvyke! {user?.name}</p>
      </div>
    </div>
  );
};
