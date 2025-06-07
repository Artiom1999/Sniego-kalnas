import "./ski-rent-list.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import { SkiCard } from "../SkiCard/SkiCard";
import type { Ski } from "../../types/types";
import { API_URL } from "../../constants/golbal";

export const SkiRentList = () => {
  const [skis, setSkis] = useState<Ski[]>([]);
  const [brands, setBrands] = useState<string[]>([]);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([5, 100]);

  useEffect(() => {
    fetchSkis();
    fetchBrands();
  }, [selectedBrand, priceRange]);

  const fetchSkis = async () => {
    try {
      const response = await axios.get(`${API_URL}/skis`, {
        params: {
          brand: selectedBrand,
          minPrice: priceRange[0],
          maxPrice: priceRange[1],
        },
      });
      setSkis(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchBrands = async () => {
    try {
      const response = await axios.get(`${API_URL}/skis/brands`);
      setBrands(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="ski-rent-list-container">
      <aside className="ski-rent-filter">
        <div className="filter-section">
          <h3>Gamintojas</h3>
          {brands.map((brand) => (
            <label key={brand}>
              <input
                type="radio"
                name="brand"
                value={brand}
                checked={selectedBrand === brand}
                onChange={() => setSelectedBrand(brand)}
              />
              {brand}
            </label>
          ))}
          <label>
            <input
              type="radio"
              name="brand"
              value=""
              checked={selectedBrand === null}
              onChange={() => setSelectedBrand(null)}
            />
            Visi
          </label>
        </div>

        <div className="filter-section">
          <h3>Kaina per diena</h3>
          <Slider
            range
            min={5}
            max={100}
            defaultValue={[5, 100]}
            value={priceRange}
            onChange={(value: [number, number]) => setPriceRange(value)}
          />
          <div className="price-values">
            <span>{priceRange[0]} €</span> - <span>{priceRange[1]} €</span>
          </div>
        </div>
      </aside>

      <div className="ski-list">
        {skis.map((ski) => (
          <SkiCard key={ski._id} ski={ski} />
        ))}
      </div>
    </div>
  );
};
