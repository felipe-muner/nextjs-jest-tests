import Text from '../components/Text';
import Index from '../components/Index';
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

test('H1 Amount', ()=> {
  const render = shallow(<Index />);
  const h1s = render.find('h1')
  expect(h1s).toHaveLength(1)
});