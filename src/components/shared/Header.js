import Logo from "../../assets/images/turnerscars_logo_car.png";
import ChineseContact from "../../assets/images/language-chinese-contact.png"
import Register from "./btnRegister";
import Signin from "./btnSignin";
import styles from "../styles/Header.module.css"
import Navbar from "./Navbar";
import { FaPhoneAlt, FaUser} from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";

const { logo, btnHeader, header_container,header_top,header_contact,chinese} = styles;

export default function Header({isLoggedIn}) {
  const signin = new Signin();
  const register = new Register();

  return (
    <div className={header_container}>
      <Navbar />
      <div className={header_top}>
        <div className={logo}>
          <img src={Logo} alt="Turners Logo for desktop"></img>
        </div>
        <div className={header_contact}>
          <FaUser />
          <button onClick={signin} className={btnHeader}>
            LOGIN
          </button>
          <jt>OR</jt>
          <button onClick={register} className={btnHeader}>
            REGISTER
          </button>
          <FaPhoneAlt />
          <jt>0800 887 637</jt>
          <MdLocationPin />
          <jt>Find Us</jt>
          <div className={chinese}>
            <img src={ChineseContact} alt="Chinese speaking contact"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
