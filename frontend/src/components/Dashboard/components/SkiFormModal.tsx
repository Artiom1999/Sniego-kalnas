import { useState, useEffect } from "react";
import type { Ski } from "../../../types/types";
import "./ski-form-modal.css";

interface SkiFormModalProps {
  onModalClose: () => void;
  // Omit<Ski, "_id"> is used to exclude the _id field from the form data
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

  const handleFeaturesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const featuresString = e.target.value;
    setFeatures(featuresString.split(",").map((item) => item.trim()));
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onModalClose}>
          &times;
        </span>
        <h2>{editSki ? "Edit Ski" : "Add New Ski"}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Make:</label>
            <input
              value={make}
              onChange={(e) => setMake(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Model:</label>
            <input
              value={model}
              onChange={(e) => setModel(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Category:</label>
            <textarea
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label>Description:</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label>Radius:</label>
            <input
              type="number"
              value={radius}
              onChange={(e) => setRadius(Number(e.target.value))}
              required
            />
          </div>
          <div className="form-group">
            <label>Length:</label>
            <input
              type="number"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              required
            />
          </div>
          <div className="form-group">
            <label>Price per day:</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              required
            />
          </div>
          <div className="form-group">
            <label>Level:</label>
            <input
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Condition:</label>
            <input
              value={condition}
              onChange={(e) => setCondition(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Image URL:</label>
            <input
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn">
            {editSki ? "Update Ski" : "Add Ski"}
          </button>
        </form>
      </div>
    </div>
  );
};
function setFeatures(arg0: string[]) {
  throw new Error("Function not implemented.");
}
