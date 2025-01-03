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

  const imageBasePath = import.meta.env.BASE_URL;

  return (
    <nav className="navbar">
      {!isHomePage && (
        <div className="navbar-logo">
          <Link to="/home">
            <img src={`${imageBasePath}logos/fav.svg`} alt="Logo" />
          </Link>
        </div>
      )}
      <ul className="navbar-menu">
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link to={item.link}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
