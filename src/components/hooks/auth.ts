import authUser from "../../util/dummydata/getTestData";
import validEmail from "../../util/validEmail"

const auth = (email: String,password:String) => {
    return (validEmail(email))? authUser(email,password): { error: "Invalid Email" };
     }
export default auth

