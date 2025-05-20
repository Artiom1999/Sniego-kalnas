import axios from "axios";
import { useState, useEffect } from "react";
import { SkiCard } from "../SkiCard/SkiCard";
import type { Ski } from "../../types/types";

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
