import classes from "./navbar.module.css";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className={classes.NavBar}>
      <nav>
        <ul>
          <li>
            <Link to="home" smooth={true} duration={1000}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={1000}>
              About
            </Link>
          </li>
          <li>
            <Link to="youtube" smooth={true} duration={1000}>
              Youtube
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={1000}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
