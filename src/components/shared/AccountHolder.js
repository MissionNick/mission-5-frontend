import defaultPic from "../../assets/images/DefaultUser.png";
import mikePic from "../../assets/images/Mike.png";
import styles from "../styles/Header.module.css";
import { UserContext } from "../../helper/Context";

const { userPic, userIcon } = styles;

const AccountHolder = () => {
  return (
    <div className={userIcon}>
      <UserContext.Consumer>
        {({ userDetails, isLoggedIn, setUserDetails, setIsLoggedIn }) => {
          return isLoggedIn ? (
            <>
              <img src={mikePic} alt="User" id={userPic}></img>
              <p>{userDetails.name}</p>
            </>
          ) : (
            <>
              <img src={defaultPic} alt="User" id={userPic}></img>
              <p>Login</p>
            </>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
};

export default AccountHolder;
