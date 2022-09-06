import Logo from "../../assets/images/turnerscars_logo_car.png";
import ChineseContact from "../../assets/images/language-chinese-contact.png";
import styles from "../styles/Header.module.css";
import Navbar from "./Navbar";
import { FaPhoneAlt, FaUser } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";
import Login from "../../pages/Login";

const {
  logo,
  btnHeader,
  header_container,
  header_top,
  header_contact,
  chinese,
} = styles;

export default function Header({ isLoggedIn }) {
  return (
    <div className={header_container}>
      <Navbar />
      <div className={header_top}>
        <div className={logo}>
          <img src={Logo} alt="Turners Logo for desktop"></img>
        </div>
        <div className={header_contact}>
          <FaUser />
          <Link to="/login" exact component={Login} className={btnHeader}>
            LOGIN
          </Link>
          <p>OR</p>
          <Link to ="/login" exact component={Login}  className={btnHeader}>
            REGISTER
          </Link>
          <FaPhoneAlt />
          <p>0800 887 637</p>
          <MdLocationPin />
          <p>Find Us</p>
          <div className={chinese}>
            <img src={ChineseContact} alt="Chinese speaking contact"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
