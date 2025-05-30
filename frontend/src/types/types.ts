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
