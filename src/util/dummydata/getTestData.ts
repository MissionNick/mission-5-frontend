const getTestData = (email: String) => {

    /*fetch("./user.json", { mode: "no-cors" })
    .then((res) => res.json())
    .then((data) => getuser(data));
*/
  const users = require("./user.json");

  const search = users.find((e: any) => e.email === email);

  return search === undefined ? { error: "No user found" } : search;
};

export default getTestData;
