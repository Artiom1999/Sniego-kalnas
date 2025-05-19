const fs = require("fs");
const filePath = "./database/skis.json";

const getAllSkis = () => {
  const data = fs.readFileSync(filePath);

  return JSON.parse(data);
};

const getSkiById = (id) => {
  const skis = getAllSkis();
  return skis.find((ski) => ski.id === id);
};

module.exports = { getAllSkis, getSkiById };
