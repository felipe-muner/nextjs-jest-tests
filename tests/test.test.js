import Text from '../components/Text';
import Index from '../pages/index';
import { shallow } from "enzyme";

test('Div Amount', ()=> {
  const render = shallow(<Text />);
  const divs = render.find('div')
  expect(divs).toHaveLength(1)
});

test('Button Amount', ()=> {
  const render = shallow(<Text />);
  const buttons = render.find('button')
  expect(buttons).toHaveLength(2)
});

test('H2 Amount', ()=> {
  const render = shallow(<Index />);
  const h2s = render.find('h2')
  expect(h2s).toHaveLength(0)
});