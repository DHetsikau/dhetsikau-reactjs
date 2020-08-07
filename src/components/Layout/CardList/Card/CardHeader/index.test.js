import React from 'react';

import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CardHeader from './index';

configure({adapter: new Adapter()});

describe('<CardHeader />', () => {
  let wrapper;
  let props = {
    disabled: false,
    isEditable: false, 
    displayedAs: "group",
    isSelected: false,
    selectMode: false,
    headerChanged: jest.fn(),
    headerTempValue: "header temp value",
    headerLabel: "header value",
    save: jest.fn(),
    decline: jest.fn(),
    edit: jest.fn(),
    switch: jest.fn(), 
  };
  
  beforeEach(() => {
    wrapper = shallow(<CardHeader {...props}/>);
  });
  
  it('should render CardHeader component', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render CardHeader component in Edit Mode & Group Style', () => {
    wrapper.setProps({
      isEditable: true,
      disabled: false,
    });
    expect(wrapper.find('input')).toHaveLength(1);
  });

  it('should render CardHeader component in Select Mode & Single Style', () => {
    wrapper.setProps({
      isEditable: false,
      selectMode: true,
      displayedAs: 'single'
    });
    expect(wrapper.find('input')).toHaveLength(1);
  });
});
