import styles from "../styles/Footer.module.css";
import placeholder from "../../assets/images/Footer.png";

const { container } = styles;

export default function Footer() {
  return (
    <div className={container}>
          <img style={{maxWidth:"1200px"}} src={placeholder} alt="Mock Footer" />
    </div>
  );
}
