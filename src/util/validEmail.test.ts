import validEmail from './validEmail'

describe("Email format tests ", () => {
  it("Empty string return false", () => {
    //Arrange
    const input = "";
    const expected = false;
   
    const actual: any = validEmail(input);

    expect(actual).toBe(expected);
  });

  it("Valid Email return true", () => {
    //Arrange
    const input = "member@domain.com";
    const expected = true;

    //Act
      const actual: any = validEmail(input);

    //Assert
    expect(actual).toBe(expected);
  });

  it("Invalid Email return false", () => {
    //Arrange
    const input = "emailwithoutadomain";
      const expected = false;

    //Act
    const actual: any = validEmail(input);

    //Assert
    expect(actual).toBe(expected);
  });
});