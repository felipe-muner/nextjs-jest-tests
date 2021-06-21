import Text from '../components/Text';
import { shallow } from "enzyme";

test('check counter', ()=> {
  const render = shallow(<Text />);
  const divs = render.find('div')
  // const button = getByText("Increase");
  expect(divs).toHaveLength(1)
});