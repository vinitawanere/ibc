import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/" || location.pathname === "/home";

  // Dynamic menu items based on the current page
  const menuItems = (() => {
    switch (location.pathname) {
      case "/":
      case "/home":
        return [{ label: "About Us", link: "/aboutus" }];
      case "/services/yoga-training":
        return [{ label: "About Trainer", link: "/abouttrainer" }];
      default:
        return [];
    }
  })();

  return (
    <nav className="navbar">
      {!isHomePage && (
        <div className="navbar-logo">
          <Link to="/home">
            <img src="/logos/fav.svg" alt="Logo" />
          </Link>
        </div>
      )}
      <ul className="navbar-menu">
        {menuItems.map((item, index) => (
          <li key={index}>
            <a href={item.link}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
