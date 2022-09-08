import getTestData from "./getTestData";

describe("GetTestData tests - email", () => {
  it("User Mike returns Mike as Owner values", () => {
    //Arrange
    const email = "owner@domain.com";
    const password = "1234567890";
    const expected = {
      email: "owner@domain.com",
      password: "1234567890",
      role: "account.owner",
      photo: "url",
      name: "Mike",
    };

    //Act
    const actual: any = getTestData(email, password);

    //Assert
    expect(actual).toStrictEqual(expected);
  });

  it("User Lillian returns Lillian as Member values", () => {
    //Arrange
    const email = "member@domain.com";
    const password = "0987654321";
    const expected = {
      email: "member@domain.com",
      password: "0987654321",
      role: "account.member",
      photo: "url",
      name: "Lillian",
    };

    //Act
    const actual: any = getTestData(email, password);

    //Assert
    expect(actual).toStrictEqual(expected);
  });

  it("User NotRegistered returns error", () => {
    //Arrange
    const email = "notregisterd@domain.com";
    const password = "nopassword";
    const expected = { error: "No user found" };

    //Act
    const actual: any = getTestData(email, password);

    //Assert
    expect(actual).toStrictEqual(expected);
  });

  it("Invalid password returns error", () => {
    //Arrange
    const email = "member@domain.com";
    const password = "wrongpassword";
    const expected = { error: "Invalid Password" };

    //Act
    const actual: any = getTestData(email, password);

    //Assert
    expect(actual).toStrictEqual(expected);
  });
});
