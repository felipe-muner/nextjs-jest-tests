import Text from '../components/Text';
import { shallow } from "enzyme";

test('check counter', ()=> {
  const render = shallow(<Text />);
  const divs = render.find('div')
  const buttons = render.find('button')
  console.log(buttons)
  // const button = getByText("Increase");
  expect(divs).toHaveLength(1)
  expect(buttons).toHaveLength(1)
});