// import NavBar from "../components/NavBar";

describe('my beverage', () => {
  test('is delicious', () => {
    expect(true).toBeTruthy();
  });

  test('is not sour', () => {
    expect(true).toBeFalsy();
  });

  test("Link changes the class when hovered", () => {
    const expected = { name: "component name" };
    const actual = { name: "component name", type: "form" };
    expect(actual).toMatchObject(expected);
  })
});
