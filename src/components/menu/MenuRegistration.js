import { NavLink } from "react-router-dom";
import styles from "../styles/Pagenav.module.css";
const { page_nav_container } = styles;

//TO DO change to match pagenav (copied from site nav bar)

const PageNav = () => {
  return (
    <div className={page_nav_container}>
      <NavLink
        className={({ isActive }) =>
          isActive ? "headerNavLinks activeNavLink" : "headerNavLinks"
        }
        to="/"
      >
        Find a Car
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive ? "headerNavLinks activeNavLink" : "headerNavLinks"
        }
        to="/"
      >
        How to Buy
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive ? "headerNavLinks activeNavLink" : "headerNavLinks"
        }
        to="/"
      >
        Sell your Car
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive ? "headerNavLinks activeNavLink" : "headerNavLinks"
        }
        to="/"
      >
        Finance
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive ? "headerNavLinks activeNavLink" : "headerNavLinks"
        }
        to="/insurance"
      >
        Insurance
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive ? "headerNavLinks activeNavLink" : "headerNavLinks"
        }
        to="/"
      >
        Turners Subscription
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive ? "headerNavLinks activeNavLink" : "headerNavLinks"
        }
        to="/"
      >
        Auctions
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive ? "headerNavLinks activeNavLink" : "headerNavLinks"
        }
        to="/"
      >
        Services &amp; Info
      </NavLink>
    </div>
  );
};

export default PageNav;
