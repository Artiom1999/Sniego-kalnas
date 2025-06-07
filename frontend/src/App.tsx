import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SkiMainList } from "./components/SkiMainList/SkiMainList";
import { Navigation } from "./components/Navigation/Navigation";
import { SkiRentList } from "./components/SkiRentList/SkiRentList";
import { SkiDetails } from "./components/SkiDetails/SkiDetails";
import { SkiServisList } from "./components/SkiServis/SkiServisList";
import { Register } from "./components/Register/Register";
import { Login } from "./components/Login/Login";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { AuthProvider } from "./context/AuthContext";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import { AboutUs } from "./components/AboutUs/AboutUs";

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="app">
          <Navigation />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<SkiMainList />} />
              <Route path="/skis/:id" element={<SkiDetails />} />
              <Route path="/nuoma" element={<SkiRentList />} />
              <Route path="/serisas" element={<SkiServisList />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />

              {/* tikriname ar zmogus gali patekti i dashboard */}
              <Route element={<ProtectedRoute />}>
                <Route path="/dashboard" element={<Dashboard />} />
              </Route>
              {/* */}
            </Routes>
          </main>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
