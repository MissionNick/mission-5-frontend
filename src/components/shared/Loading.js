import styles from "../styles/LoadingStatus.module.css";

const { loading_container, loading_circle } = styles;

export default function Loading() {
  return (
    <div className={loading_container}>
      <div className={loading_circle}></div>
    </div>
  );
}
