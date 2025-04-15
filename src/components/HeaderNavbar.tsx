import { Link, useLocation } from "react-router";

const Headernavbar = () => {
  const styles = {
    active: { color: "White", fontWeight: "bold" },
    link: { color: "white", textDecoration: "none" },
  };

  const pathLocation = useLocation();
  return (
    <div>
      <ul style={{ listStyleType: "none", margin: "0", padding: "0", display: "flex", gap: "16px" }}>
        <li style={{ float: "left" }}>
          <Link to="/" style={pathLocation.pathname === "/" ? { ...styles.link, ...styles.active } : styles.link}>
            Home
          </Link>
        </li>
        <li style={{ float: "left" }}>
          <Link to="/product-list" style={pathLocation.pathname === "/product-list" || location.pathname.includes("/product/") ? { ...styles.link, ...styles.active } : styles.link}>
            Products
          </Link>
        </li>
        <li style={{ float: "left" }}>
          <Link to="/about" style={pathLocation.pathname === "/about" ? { ...styles.link, ...styles.active } : styles.link}>
            About
          </Link>
        </li>
        <li style={{ float: "left" }}>
          <Link to="/contact" style={pathLocation.pathname === "/contact" ? { ...styles.link, ...styles.active } : styles.link}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Headernavbar;
