import { useContext, useEffect, useState } from "react";
import "./dashboard.css";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { API_URL } from "../../constants/golbal";
import type { Reservation } from "../../types/types";
import { AccountInfo } from "./components/AccountInfo";
import { ReservationList } from "./components/ReservationList";
import { AdminSkisTab } from "./components/AdminSkisTab";
import { AdminUsersTab } from "./components/AdminUserTab";
import { AdminReservationsTab } from "./components/AdminRservationsTab";

type Tab = "user" | "admin-skis" | "admin-reservations" | "admin-users";

export const Dashboard = () => {
  const { user, access_token } = useContext(AuthContext);
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleteLoading, setDeleteLoading] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<Tab>("user");
  const isAdmin = user?.role === "admin";

  const fetchReservations = async () => {
    try {
      setLoading(true);
      const config = {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      };

      const response = await axios.get<Reservation[]>(
        `${API_URL}/reservations`,
        config
      );
      setReservations(response.data);
    } catch (error) {
      console.error("Error fetching reservations:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (access_token) {
      fetchReservations();
    }
  }, [access_token]);

  // Handle reservation deletion
  const handleDelete = async (reservationId: string) => {
    if (!confirm("Ar tikrai norite atšaukti šią rezervaciją?")) return;

    try {
      setDeleteLoading(reservationId);
      const config = {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      };

      await axios.delete(`${API_URL}/reservations/${reservationId}`, config);

      // Update the reservations list
      setReservations((prev) =>
        prev.filter((res) => res._id !== reservationId)
      );
    } catch (error) {
      console.error("Error deleting reservation:", error);
      alert("Failed to delete reservation. Please try again.");
    } finally {
      setDeleteLoading(null);
    }
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Profilis</h1>
        <p className="welcome-text">Sveiki Atvyke, {user?.name}!</p>
      </div>

      {isAdmin && (
        <div className="tabs">
          <button
            className={`tab-button ${activeTab === "user" ? "active" : ""}`}
            onClick={() => setActiveTab("user")}
          >
            Mano rezervacijos
          </button>
          <button
            className={`tab-button ${
              activeTab === "admin-skis" ? "active" : ""
            }`}
            onClick={() => setActiveTab("admin-skis")}
          >
            Inventoriaus valdymas
          </button>
          <button
            className={`tab-button ${
              activeTab === "admin-reservations" ? "active" : ""
            }`}
            onClick={() => setActiveTab("admin-reservations")}
          >
            Visos rezervacijos
          </button>
          <button
            className={`tab-button ${
              activeTab === "admin-users" ? "active" : ""
            }`}
            onClick={() => setActiveTab("admin-users")}
          >
            Visi vartotojai
          </button>
        </div>
      )}

      <div className="dashboard-content">
        {activeTab === "user" && (
          <>
            <AccountInfo user={user} />
            <ReservationList
              reservations={reservations}
              loading={loading}
              deleteLoading={deleteLoading}
              onDelete={handleDelete}
            />
          </>
        )}

        {activeTab === "admin-skis" && <AdminSkisTab />}
        {activeTab === "admin-reservations" && <AdminReservationsTab />}
        {activeTab === "admin-users" && <AdminUsersTab />}
      </div>
    </div>
  );
};
