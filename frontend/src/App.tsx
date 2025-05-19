import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainList } from "./components/SkiList/MainList";
import { Navigation } from "./components/Navigation/Navigation";
import { SkiRentList } from "./components/SkiRentList/SkiRentList";

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<MainList />} />
            <Route path="/nuoma" element={<SkiRentList />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
