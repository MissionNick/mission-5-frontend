import auth from "./auth";

describe("Auth negative tests", () => {
  it("User email empty returns error", () => {
    //Arrange
    const input = "";
    const expected = { error: "Invalid Email" };

    //Act
    const actual: any = auth(input);

    //Assert
    expect(actual).toStrictEqual(expected);
  });

  it("User NotRegistered returns error", () => {
    //Arrange
    const input = "notregisterd@domain.com";
    const expected = { error: "No user found" };

    //Act
    const actual: any = auth(input);

    //Assert
    expect(actual).toStrictEqual(expected);
  });
});

describe("Auth positive tests", () => {
  it("User Lillian returns Lillian as Member values", () => {
    //Arrange
    const input = "member@domain.com";
    const expected = {
      email: "member@domain.com",
      password: "0987654321",
      role: "account.member",
      photo: "url",
      name: "Lillian",
    };

    //Act
    const actual: any = auth(input);

    //Assert
    expect(actual).toStrictEqual(expected);
  });


});
