export interface Ski {
  _id: string;
  make: string;
  model: string;
  category: string;
  description: string;
  radius: number;
  length: number;
  price: number;
  level: string;
  condition: string;
  image: string;
}

export interface User {
  _id: string;
  name: string;
  email: string;
  role: "user" | "admin";
  createdAt: string;
  updatedAt: string;
}

export interface Reservation {
  _id: string;
  skiId: string;
  userId: string;
  startDate: string;
  endDate: string;
  totalPrice: number;
  createdAt: string;
  updatedAt: string;
  ski: {
    _id: string;
    make: string;
    model: string;
    image: string;
  };
}

export interface AdminReservation {
  _id: string;
  ski: Ski;
  startDate: string;
  endDate: string;
  totalPrice: number;
  createdAt: string;
  user: {
    _id: string;
    name: string;
    email: string;
  };
}
