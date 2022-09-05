import { NavLink } from "react-router-dom";


import styles from "../styles/Navbar.module.css";
const {nav_container} = styles;

const Navbar = () => {
  return (
    <div className={nav_container}>
      <NavLink
        className={({ isActive }) => isActive ? "headerNavLinks activeNavLink" : "headerNavLinks"}
        to="/"
      >Cars    
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive ? "headerNavLinks activeNavLink" : "headerNavLinks"
        }
        to="/car-subscription">
        Turners Subscription
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive ? "headerNavLinks activeNavLink" : "headerNavLinks"
        }
        to="/Trucks-Machinery">
        Trucks &amp; Machinery
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive ? "headerNavLinks activeNavLink" : "headerNavLinks"
        }
        to="/Damaged-Vehicles">
        Damaged &amp; End of Life
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive ? "headerNavLinks activeNavLink" : "headerNavLinks"
        }
        to="/motorcycles-scooters">
        Motorcycles
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive ? "headerNavLinks activeNavLink" : "headerNavLinks"
        }
        to="/General-Goods">
        General Goods
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive ? "headerNavLinks activeNavLink" : "headerNavLinks"
        }
        to="/buses-caravans">
        Buses, Caravans &amp; Motorhomes
      </NavLink>
    </div>
  );
};

export default Navbar;
