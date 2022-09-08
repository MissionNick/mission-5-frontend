import { NavLink } from "react-router-dom";

import styles from "../styles/Navbar.module.css";
const {siteNav_container} = styles;

const Navbar = () => {
  return (
    <div className={siteNav_container}>
      <NavLink
        className={({ isActive }) => isActive ? "siteNavLinks activeSiteLink" : "siteNavLinks"}
        to="/"
      >Cars    
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive ? "siteNavLinks activeSiteLink" : "siteNavLinks"
        }
        to="/car-subscription">
        Turners Subscription
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive ? "siteNavLinks activeSiteLink" : "siteNavLinks"
        }
        to="/Trucks-Machinery">
        Trucks &amp; Machinery
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive ? "siteNavLinks activeSiteLink" : "siteNavLinks"
        }
        to="/Damaged-Vehicles">
        Damaged &amp; End of Life
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive ? "siteNavLinks activeSiteLink" : "siteNavLinks"
        }
        to="/motorcycles-scooters">
        Motorcycles
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive ? "siteNavLinks activeSiteLink" : "siteNavLinks"
        }
        to="/General-Goods">
        General Goods
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive ? "siteNavLinks activeSiteLink" : "siteNavLinks"
        }
        to="/buses-caravans">
        Buses, Caravans &amp; Motorhomes
      </NavLink>
    </div>
  );
};

export default Navbar;
