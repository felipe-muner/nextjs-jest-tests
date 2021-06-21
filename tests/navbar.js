// import NavBar from "../components/NavBar";

describe('Addition', () => {
  it('knows that 2 and 2 make 4', () => {
    expect(2 + 2).toBe(4);
  });
});

describe('my beverage', () => {
  test('is delicious', () => {
    expect(true).toBeTruthy();
  });

  test('is not sour', () => {
    expect(false).toBeFalsy();
  });

  test("Link changes the class when hovered", () => {
    const expected = { name: "component name" };
    const actual = { name: "component name", type: "form" };
    expect(actual).toMatchObject(expected);
  })
});
