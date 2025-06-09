import type { Reservation } from "../../../types/types";

interface ReservationItemProps {
  reservation: Reservation;
  onDelete: (id: string) => void;
  isDeleting: boolean;
}

export const ReservationItem = ({
  reservation,
  onDelete,
  isDeleting,
}: ReservationItemProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  return (
    <div className="reservation-item">
      <div className="reservation-ski-info">
        <h4>
          {reservation.ski.make} {reservation.ski.model}
        </h4>
        <img
          src={reservation.ski.image}
          alt="Ski"
          className="reservation-ski-image"
        />
      </div>
      <div className="reservation-details">
        <p>
          <strong>Nuo:</strong> {formatDate(reservation.startDate)}
        </p>
        <p>
          <strong>Iki:</strong> {formatDate(reservation.endDate)}
        </p>
        <p>
          <strong>Iš viso:</strong> €{reservation.totalPrice}
        </p>
        <p>
          <strong>Rezervuota:</strong> {formatDate(reservation.createdAt)}
        </p>
      </div>
      <div className="reservation-actions">
        <button
          className="delete-button"
          onClick={() => onDelete(reservation._id)}
          disabled={isDeleting}
        >
          {isDeleting ? "Cancelling..." : "Atšaukti"}
        </button>
      </div>
    </div>
  );
};
