import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../../constants/golbal";
import { AuthContext } from "../../../context/AuthContext";
import type { Ski } from "../../../types/types";
import { SkiFormModal } from "./SkiFormModal";

export const AdminSkisTab = () => {
  const { access_token } = useContext(AuthContext);
  const [skis, setSkis] = useState<Ski[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editSki, setEditSki] = useState<Ski | null>(null);

  useEffect(() => {
    const fetchSkis = async () => {
      try {
        const response = await axios.get<Ski[]>(`${API_URL}/skis`);
        setSkis(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching skis:", error);
        setLoading(false);
      }
    };

    fetchSkis();
  }, []);

  const handleSubmit = async (formData: Omit<Ski, "_id">) => {
    const config = {
      headers: { Authorization: `Bearer ${access_token}` },
    };

    try {
      if (editSki) {
        await axios.put(`${API_URL}/skis/${editSki._id}`, formData, config);
        alert("Ski updated successfully!");
      } else {
        await axios.post(`${API_URL}/skis`, formData, config);
        alert("Ski created successfully!");
      }

      // Refresh ski list
      const response = await axios.get<Ski[]>(`${API_URL}/skis`);
      setSkis(response.data);

      // Reset form
      setShowForm(false);
      setEditSki(null);
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const handleEdit = (ski: Ski) => {
    setEditSki(ski);
    setShowForm(true);
  };

  return (
    <div className="admin-tab">
      <div className="admin-header">
        <h2>Inventoriaus valdymas</h2>
        <button className="btn" onClick={() => setShowForm(true)}>
          Pridėti naujas slides
        </button>
      </div>

      {loading ? (
        <p>Kraunamos slidės...</p>
      ) : (
        <table className="reservation-table">
          <thead>
            <tr>
              <th>Nuotrauka</th>
              <th>Gamintojas</th>
              <th>Modelis</th>
              <th>Būklė</th>
              <th>Kaina</th>
              <th>Veiksmai</th>
            </tr>
          </thead>
          <tbody>
            {skis.map((ski) => (
              <tr key={ski._id}>
                <td>
                  <img src={ski.image} alt={ski.make} className="ski-image" />
                </td>
                <td>{ski.make}</td>
                <td>{ski.model}</td>
                <td>{ski.condition}</td>
                <td>{ski.price}€/day</td>
                <td>
                  <button className="btn-edit" onClick={() => handleEdit(ski)}>
                    Redaguoti
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {showForm && (
        <SkiFormModal
          onModalClose={() => {
            setShowForm(false);
            setEditSki(null);
          }}
          onSubmit={handleSubmit}
          editSki={editSki}
        />
      )}
    </div>
  );
};
