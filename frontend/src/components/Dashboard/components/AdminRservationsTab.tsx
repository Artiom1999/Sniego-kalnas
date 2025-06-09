import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../../constants/golbal";
import { AuthContext } from "../../../context/AuthContext";
import type { AdminReservation } from "../../../types/types";

export const AdminReservationsTab = () => {
  const { access_token } = useContext(AuthContext);
  const [allReservations, setAllReservations] = useState<AdminReservation[]>(
    []
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllReservations = async () => {
      try {
        const config = {
          headers: { Authorization: `Bearer ${access_token}` },
        };

        const response = await axios.get<AdminReservation[]>(
          `${API_URL}/reservations/all`,
          config
        );
        setAllReservations(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching all reservations:", error);
        setLoading(false);
      }
    };

    fetchAllReservations();
  }, [access_token]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString();
  };

  return (
    <div className="admin-tab">
      <h2>Visos rezervacijos</h2>

      {loading ? (
        <p>Kraunamos rezervacijos...</p>
      ) : allReservations.length === 0 ? (
        <p>Rezervacijų nerasta</p>
      ) : (
        <table className="reservation-table">
          <thead>
            <tr>
              <th>Naudotojas</th>
              <th>Slidės</th>
              <th>Pradžios data</th>
              <th>Pabaigos data</th>
              <th>Bendra kaina</th>
              <th>Rezervacijos data</th>
            </tr>
          </thead>
          <tbody>
            {allReservations.map((reservation) => (
              <tr key={reservation._id}>
                <td>
                  {reservation.user.name}
                  <div className="email">{reservation.user.email}</div>
                </td>
                <td>
                  <div className="ski-details">
                    <img
                      src={reservation.ski.image}
                      alt={reservation.ski.make}
                      className="ski-image"
                    />
                    <div>
                      {reservation.ski.make} {reservation.ski.model}
                    </div>
                  </div>
                </td>
                <td>{formatDate(reservation.startDate)}</td>
                <td>{formatDate(reservation.endDate)}</td>
                <td>€{reservation.totalPrice}</td>
                <td>{formatDate(reservation.createdAt)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
