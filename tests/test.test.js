/*
 * @jest-environment jsdom
 */

import Index from "../pages/index";
import CheckingAccount from "../components/CheckingAccount";
import SavingAccount from "../components/SavingAccount";
import { shallow, mount } from "enzyme";
import { SUPERHEROES } from "../constants/superheros";

const user = {
  checkingAmount: 0,
  savingAmount: 300,
};

// test("H2 Amount", () => {
//   const wrapper = shallow(<Index />);
//   const h2s = wrapper.find("h2");
//   expect(h2s).toHaveLength(1);
// });

// describe("rendering components", () => {
//   it("render App component without crashing", () => {
//     shallow(<Index />);
//   });
//   it("header no crashing", () => {
//     const wrapper = shallow(<Index />);
//     const header = <h2>My Savings</h2>;
//     expect(wrapper.contains(header)).toEqual(true);
//   });
//   it("Button names", () => {
//     const wrapper = mount(<CheckingAccount />);
//     const label = wrapper.find("#send-button").text();
//     expect(label).toEqual("Send 100 to Saving");
//   });
// });

// describe("Saving account - passing props", () => {
//   const savingAccount = mount(
//     <SavingAccount savingAmount={user.checkingAmount} />
//   );
//   it("it accepts user acc props", () => {
//     expect(savingAccount.props().savingAmount).toBe(user.checkingAmount);
//   });
//   it("it shows same text", () => {
//     const total = savingAccount.find("#saving").text();
//     const expected = user.checkingAmount + "$";
//     expect(expected).toEqual(total);
//   });
// });

// describe("Simulating clicks", () => {
//   it("Test click event", () => {
//     const mockCallBack = jest.fn();
//     const button = shallow(<button onClick={mockCallBack}>Ok!</button>);
//     button.find("button").simulate("click");
//     expect(mockCallBack.mock.calls.length).toEqual(1);
//   });
// });

// describe("Simulating clicks 2", () => {
//   const index = mount(<Index />);
//   index.find("#test-increment").simulate("click");
//   const counter = index.find("#counter").text();
//   expect(counter).toEqual("1");
// });

// describe("snapshots Index", () => {
//   const wrapper = shallow(<Index />);
//   wrapper.find("#test-increment").simulate("click");
//   wrapper.find("#test-increment").simulate("click");
//   wrapper.find("#test-increment").simulate("click");
//   it("should match snapshot", () => expect(wrapper).toMatchSnapshot());
//   // expect(tree.prop('style')).toMatchSnapshot();
//   // expect(tree.prop('style')).toMatchSnapshot();
// });

// describe("Constants", () => {
//   it("SUPERHEROES should match snapshot", () =>
//     expect(SUPERHEROES).toMatchSnapshot());
// });

// describe("Constants print style", () => {
//   const wrapper = shallow(<div style="font-size:10px;" />);
//   it("checking component css style ", () =>
//     expect(wrapper.prop("style")).toMatchSnapshot());
// });

describe("Test calculation", () => {
  // it("saving balance 400$", () => {
  //   const saving = mount(<SavingAccount savingAmount={user2.savingAmount} />);
  //   const total = saving.find("#saving-val").text();
  //   const expected = user2.savingAmount + "$";
  //   expect(expected).toEqual(total);
  // });

  it("saving balance 200$", () => {
    const wrapper = mount(<Index />);

    wrapper.find("#send-to-checking").simulate("click");
    const savingAmount = wrapper.find("#saving-val").text();
    const expected = user.savingAmount + "$";
    expect(savingAmount).toEqual(expected);

    // saving.find("#setnum").simulate("click");
    // saving.find("#setnum").simulate("click");
    // const numval = saving.find("#num-val").text();

    // console.log("numval", numval);
    expect(wrapper).toMatchSnapshot();
  });

  // it("SNAPSHOT SAVING", () => {
  //   const wrapper = mount(<Index />);

  // });
});
