import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <main className="main-content">
          <Routes>
            <Route path="/" element={<h1>Svieki atvyke i sniego-kalnas!</h1>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
