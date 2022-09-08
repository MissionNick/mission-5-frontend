import { NavLink } from "react-router-dom";
import styles from "../styles/Pagenav.module.css";
const { page_nav_container } = styles;

//TO DO change to match pagenav (copied from site nav bar)
const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontWeight:'light'
 
}



const PageNav = () => {
  return (
    <div className={page_nav_container}>
      <NavLink 
        className={({ isActive }) =>
          isActive ? "headerNavLinks activeNavLink" : "headerNavLinks"
        }
        to="/" style={{linkStyle}}
      >
        Find a Car
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive ? "headerNavLinks activeNavLink" : "headerNavLinks"
        }
        to="/" style={{linkStyle}}
      >
        How to Buy
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive ? "headerNavLinks activeNavLink" : "headerNavLinks"
        }
        to="/" style={{linkStyle}}
      >
        Sell your Car
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive ? "headerNavLinks activeNavLink" : "headerNavLinks"
        }
        to="/" style={{linkStyle}}
      >
        Finance
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive ? "headerNavLinks activeNavLink" : "headerNavLinks"
        }
        to="/insurance" style={{linkStyle}}
      >
        Insurance
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive ? "headerNavLinks activeNavLink" : "headerNavLinks"
        }
        to="/" style={{linkStyle}}
      >
        Turners Subscription
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive ? "headerNavLinks activeNavLink" : "headerNavLinks"
        }
        to="/" style={{linkStyle}}
      >
        Auctions
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive ? "headerNavLinks activeNavLink" : "headerNavLinks"
        }
        to="/" style={{linkStyle}}
      >
        Services &amp; Info
      </NavLink>
    </div>
  );
};

export default PageNav;
