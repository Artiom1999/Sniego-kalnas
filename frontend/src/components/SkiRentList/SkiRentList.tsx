import axios from "axios";
import { useState, useEffect } from "react";
import { SkiCard } from "../SkiCard.tsx/SkiCard";

export interface Ski {
  id: string;
  model: string;
  length: number;
  price: number;
  year: number;
  image: string;
}

export const SkiRentList = () => {
  const [skis, setSkis] = useState<Ski[]>([]);

  useEffect(() => {
    const fetchSkis = async () => {
      try {
        const response = await axios.get("http://localhost:3007/api/skis/");
        setSkis(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSkis();
  }, []);
  return (
    <>
      <div className="ski-list">
        {skis.map((ski) => (
          <SkiCard key={ski.id} ski={ski} />
        ))}
      </div>
    </>
  );
};
