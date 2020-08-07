import React from 'react';

import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CardBody from './index';

configure({adapter: new Adapter()});

describe('<CardBody />', () => {
  let wrapper;
  let props = {
    disabled: false,
    isEditable: false,
    titleChanged: jest.fn(),
    titleTempValue: "title updated text",
    titleLabel: "title text",
    textChanged: jest.fn(() => {}),
    textTempValue: "body updated text",
    textLabel: "body text",
    displayedAs: "group",
  };

  beforeEach(() => {
    wrapper = shallow(<CardBody {...props}/>);
  });

  it('should render the component', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render component in view only mode', () => {
    wrapper.setProps({
        disabled: true,
        titleLabel: "very very very very long title text",
    });

    expect(wrapper.find('.ih-30')).toHaveLength(0);
    expect(wrapper.find('.g-ta')).toHaveLength(0);
  });

  it('should render component in view only mode for single page', () => {
    wrapper.setProps({
        displayedAs: 'single',
    });
    expect(wrapper.find('.ih-30')).toHaveLength(0);
    expect(wrapper.find('.g-ta')).toHaveLength(0);
  });

  it('should render component in edit mode', () => {
    wrapper.setProps({
        isEditable: true,
    });
    expect(wrapper.find('.hw-200')).toHaveLength(1);
    expect(wrapper.find('.g-ta')).toHaveLength(1);
  });

  it('should render component in edit mode for single page', () => {
    wrapper.setProps({
        isEditable: true,
        displayedAs: 'single',
    });
    expect(wrapper.find('.hw-550')).toHaveLength(1);
    expect(wrapper.find('.s-ta')).toHaveLength(1);
  });
});
