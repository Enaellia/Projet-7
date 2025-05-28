import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Logement from "./pages/Logement";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Error404 from "./pages/Error404";
import About from "./pages/About";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logement/:id" element={<Logement />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </main>
        <Footer />
      </div >
    </Router>
  );
}

export default App;
