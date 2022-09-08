import authUser from "../../util/dummydata/getTestData";
import validEmail from "../../util/validEmail"

const auth = (email: String) => {
    return (validEmail(email))? authUser(email): { error: "Invalid Email" };
     }
export default auth

