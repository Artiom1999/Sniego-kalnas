import type { User } from "../../../types/types";

interface AccountInfoProps {
  user: User | null;
}

export const AccountInfo = ({ user }: AccountInfoProps) => {
  return (
    <div className="dashboard-card">
      <h3>Paskyros informacija</h3>
      <div className="account-info">
        <p>
          <strong>Vardas:</strong> {user?.name}
        </p>
        <p>
          <strong>El. paštas:</strong> {user?.email}
        </p>
        <p>
          <strong>Vartotojo vaidmuo:</strong> {user?.role}
        </p>
      </div>
    </div>
  );
};
