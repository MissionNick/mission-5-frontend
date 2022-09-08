import { NavLink } from "react-router-dom";
import styles from "../styles/Menu.module.css";
const { page_nav_container} = styles;


//TO DO change to match pagenav (copied from site nav bar)




const PageNav = () => {
  return (
    <div className={page_nav_container}>
      <NavLink 
        className={({ isActive }) =>
          isActive ? "headerNavLinks activeNavLink" : "headerNavLinks"
        }
        to="/find-a-car" 
      >
        Find a Car
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive ? "headerNavLinks activeNavLink" : "headerNavLinks"
        }
        to="/how-to-buy" 
      >
        How to Buy
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive ? "headerNavLinks activeNavLink" : "headerNavLinks"
        }
        to="/sell-your-car" 
      >
        Sell your Car
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive ? "headerNavLinks activeNavLink" : "headerNavLinks"
        }
        to="/finance" 
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
        to="/subscription" 
      >
        Turners Subscription
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive ? "headerNavLinks activeNavLink" : "headerNavLinks"
        }
        to="/auctions" 
      >
        Auctions
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive ? "headerNavLinks activeNavLink" : "headerNavLinks"
        }
        to="/services" 
      >
        Services &amp; Info
      </NavLink>
    </div>
  );
};

export default PageNav;
