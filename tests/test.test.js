import Index from "../pages/index";
import CheckingAccount from "../components/CheckingAccount";
import SavingAccount from "../components/SavingAccount";
import { shallow } from "enzyme";

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
    const header = (<h2 className="felipe">My Savings</h2>)
    console.log(header)
    expect(wrapper.contains(header)).toEqual(true)
  });
});
