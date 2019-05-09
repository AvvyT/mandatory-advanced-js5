import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search.jsx';

import { shallow, configure } from 'enzyme';

import Adapter from "enzyme-adapter-react-16"
configure({adapter: new Adapter()});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Search />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// -------enzyme wrappar
it('form gets submitted once', () => {
    const wrapper = shallow(<Search />);
    // skapa en mock fun.
    const mockPrevent = jest.fn();
  
    expect(wrapper.find('input').length).toBe(2)
    // preventDefault-metod: läggs mock-fun
    wrapper.find('form').simulate("submit", {
      preventDefault: mockPrevent
    })
    expect(mockPrevent.mock.calls.length).toBe(1)
  });

