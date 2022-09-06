import styles from "../styles/Login.module.css";
const { login_container } = styles;

export default function Login({isLoggedIn,setIsloggedIn}) {
  return (
    <div className={login_container}>
      Login Body
    </div>
  )
}
