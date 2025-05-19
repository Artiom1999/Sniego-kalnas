import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SkiList } from "./components/SkiList";

function App() {
  return (
    <Router>
      <div className="app">
        <main className="main-content">
          <Routes>
            <Route path="/" element={<SkiList />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
