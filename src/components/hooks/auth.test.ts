import auth from "./auth";

describe("Auth negative tests", () => {
  it("User email empty returns error", () => {
    //Arrange
    const email = "";
    const password = "";
    const expected = { error: "Invalid Email" };

    //Act
    const actual: any = auth(email,password);

    //Assert
    expect(actual).toStrictEqual(expected);
  });

  it("User NotRegistered returns error", () => {
    //Arrange
    const email = "notregisterd@domain.com";
    const password = "";
    const expected = { error: "No user found" };

    //Act
    const actual: any = auth(email,password);

    //Assert
    expect(actual).toStrictEqual(expected);
  });
});

describe("Auth positive tests", () => {
  it("User Lillian returns Lillian as Member values", () => {
    //Arrange
    const email = "member@domain.com";
    const password = "0987654321";
    const expected = {
      email: "member@domain.com",
      password: "0987654321",
      role: "account.member",
      photo: "Lillian.png",
      name: "Lillian Mackintosh",
    };

    //Act
    const actual: any = auth(email,password);

    //Assert
    expect(actual).toStrictEqual(expected);
  });


});
