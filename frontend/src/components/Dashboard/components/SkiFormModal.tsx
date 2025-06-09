import { useState, useEffect } from "react";
import type { Ski } from "../../../types/types";
import "./ski-form-modal.css";

interface SkiFormModalProps {
  onModalClose: () => void;
  onSubmit: (formData: Omit<Ski, "_id">) => Promise<void>;
  editSki: Ski | null;
}

export const SkiFormModal: React.FC<SkiFormModalProps> = ({
  onModalClose,
  onSubmit,
  editSki,
}) => {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [radius, setRadius] = useState(0);
  const [length, setLength] = useState(0);
  const [price, setPrice] = useState(0);
  const [level, setLevel] = useState("");
  const [condition, setCondition] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    if (editSki) {
      setMake(editSki.make);
      setModel(editSki.model);
      setCategory(editSki.category);
      setDescription(editSki.description);
      setRadius(editSki.radius);
      setLength(editSki.length);
      setPrice(editSki.price);
      setLevel(editSki.level);
      setCondition(editSki.condition);
      setImage(editSki.image);
    }
  }, [editSki]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = {
      make,
      model,
      category,
      description,
      radius,
      length,
      price,
      level,
      condition,
      image,
    };
    await onSubmit(formData);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onModalClose}>
          &times;
        </span>
        <h2>{editSki ? "Redaguoti slidęs" : "Pridėti naują slidęs"}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Gamintojas:</label>
            <input
              value={make}
              onChange={(e) => setMake(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Modelis:</label>
            <input
              value={model}
              onChange={(e) => setModel(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Kategorija:</label>
            <textarea
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label>Aprašymas:</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label>Radijus:</label>
            <input
              type="number"
              value={radius}
              onChange={(e) => setRadius(Number(e.target.value))}
              required
            />
          </div>
          <div className="form-group">
            <label>Ilgis:</label>
            <input
              type="number"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              required
            />
          </div>
          <div className="form-group">
            <label>Kaina už dieną:</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              required
            />
          </div>
          <div className="form-group">
            <label>Lygis:</label>
            <input
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Būklė:</label>
            <input
              value={condition}
              onChange={(e) => setCondition(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Nuotraukos URL:</label>
            <input
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn">
            {editSki ? "Atnaujinti slidęs" : "Pridėti slidęs"}
          </button>
        </form>
      </div>
    </div>
  );
};
