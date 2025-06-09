import type { Reservation } from "../../../types/types";
import { ReservationItem } from "./ReservationItem";

interface ReservationListProps {
  reservations: Reservation[];
  loading: boolean;
  deleteLoading: string | null;
  onDelete: (id: string) => void;
}

export const ReservationList = ({
  reservations,
  loading,
  deleteLoading,
  onDelete,
}: ReservationListProps) => {
  return (
    <div className="dashboard-card reservations-card">
      <h3>Jūsų rezervacijos</h3>
      {loading ? (
        <p>Įkeliamos jūsų rezervacijos...</p>
      ) : reservations.length === 0 ? (
        <p>Jūs dar neturite jokių rezervacijų.</p>
      ) : (
        <div className="reservations-list">
          {reservations.map((reservation) => (
            <ReservationItem
              key={reservation._id}
              reservation={reservation}
              onDelete={onDelete}
              isDeleting={deleteLoading === reservation._id}
            />
          ))}
        </div>
      )}
    </div>
  );
};
