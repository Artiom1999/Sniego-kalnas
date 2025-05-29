import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SkiMainList } from "./components/SkiMainList/SkiMainList";
import { Navigation } from "./components/Navigation/Navigation";
import { SkiRentList } from "./components/SkiRentList/SkiRentList";
import { SkiDetails } from "./components/SkiDetails/SkiDetail";
import { SkiServisList } from "./components/SkiServis/SkiServisList";

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<SkiMainList />} />
            <Route path="/skis/:id" element={<SkiDetails />} />
            <Route path="/nuoma" element={<SkiRentList />} />
            <Route path="/serisas" element={<SkiServisList />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
