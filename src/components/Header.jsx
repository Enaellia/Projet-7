import { NavLink } from "react-router-dom";
import "../App.css";

function Header() {
  return (
    <header className="header">
      <img src="/logo.png" alt="Kasa logo" className="logo" />
      <nav>
        <NavLink to="/" className="nav-link">Accueil</NavLink>
        <NavLink to="/about" className="nav-link">À propos</NavLink>
      </nav>
    </header>
  );
}

export default Header;
