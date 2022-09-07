import getTestData from "./getTestData";

describe("GetTestData tests", () => {
  it("User Mike returns Mike as Owner values", () => {
    //Arrange
    const input = "owner@domain.com";
    const expected = {
      email: "owner@domain.com",
      password: "1234567890",
      role: "account.owner",
      photo: "url",
      name: "Mike",
    };

    //Act
    const actual: any = getTestData(input);

    //Assert
    expect(actual).toStrictEqual(expected);
  });

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
    const actual: any = getTestData(input);

    //Assert
    expect(actual).toStrictEqual(expected);
  });

  it("User NotRegistered returns empty", () => {
    //Arrange
    const input = "notregisterd@domain.com";
    const expected = { error:"No user found" };

    //Act
    const actual: any = getTestData(input);

    //Assert
    expect(actual).toStrictEqual(expected);
  });
});
