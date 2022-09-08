const getTestData = (email: String, password: String) => {
  /*fetch("./user.json", { mode: "no-cors" })
    .then((res) => res.json())
    .then((data) => getuser(data));
*/
  const users = require("./user.json");

  const search = users.find((e: any) => e.email === email);
  if (search === undefined) {
    return { error: "No user found" };
  } else {
    return search.password === password ? search : { error: "Invalid Password" };
  }
};

export default getTestData;
