import styles from "../styles/ChooseAccount.module.css";
import AccountTile from "../login/AccountTile"

const { container,body_border } = styles;

export default function chooseAccount(accounts) {
  return (
    <div className={container}>
      <h1>ChooseAccount</h1>
      <div className={body_border}>
        {accounts && accounts.length ? (
          <ShowAccounts accounts={[...accounts]}/>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

function ShowAccounts(props) {
  
  const accounts = props.accounts;

  return (
    <>
     {
      accounts.map((tile) => {
        const { accName, accPic } = tile;
        return (
          <AccountTile accName = {accName}, accPic = {accPic} />
        )
        })
      }
    </>
     )
}