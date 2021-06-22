/*
 * @jest-environment jsdom
 */

import Index from "../pages/index";
import CheckingAccount from "../components/CheckingAccount";
import SavingAccount from "../components/SavingAccount";
import { shallow, mount } from "enzyme";

const user = {
  checkingAmount: 300,
};

test("H2 Amount", () => {
  const wrapper = shallow(<Index />);
  const h2s = wrapper.find("h2");
  expect(h2s).toHaveLength(1);
});

describe("rendering components", () => {
  it("render App component without crashing", () => {
    shallow(<Index />);
  });
  it("header no crashing", () => {
    const wrapper = shallow(<Index />);
    const header = <h2>My Savings</h2>;
    expect(wrapper.contains(header)).toEqual(true);
  });
  it("Button names", () => {
    const wrapper = mount(<CheckingAccount />);
    const label = wrapper.find("#send-button").text();
    expect(label).toEqual("Send 100 to Saving");
  });
});
