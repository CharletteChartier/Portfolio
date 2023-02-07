import { NavLink } from "react-router-dom";
import './Nav.css';


const Nav = () => {
  return (
    <nav className="sidebar">

        <h1 className='navTitle'>~Chartier~</h1>
      <NavLink className="navLink" to="/home">
        Home
      </NavLink>
      <NavLink className="navLink" to="/contact">
        Contacts
      </NavLink>
      <NavLink className="navLink" to="/about">
        About
      </NavLink>
    </nav>
  );
};

export default Nav;
