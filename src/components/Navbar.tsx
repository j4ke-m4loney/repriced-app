import { Link } from "react-router-dom";
import styles from "./Navbar.module.css"; // Import CSS Module

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h2 className={styles.logo}>Repriced</h2>
      <ul className={styles.navLinks}>
        <li><Link to="/" className={styles.navLink}>Home</Link></li>
        <li><Link to="/listings" className={styles.navLink}>Listings</Link></li>
        <li><Link to="/about" className={styles.navLink}>About</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
