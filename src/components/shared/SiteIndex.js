import styles from "../styles/SiteIndex.module.css";
import placeholder from "../../assets/images/SiteIndex.png";

const { site_container} = styles;

export default function SiteIndex() {
    return (
      <div className={site_container}>
        <img src={placeholder} alt="Mock SiteIndex" />
      </div>
    );
}
