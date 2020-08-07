import React from 'react';

import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {Card} from '../Card';
import CardHeader from './CardHeader';
import CardBody from './CardBody';

import { FaCheck, FaTimes, FaPencilAlt } from 'react-icons/fa';
import * as actionTypes from '../../../../store/actions/actionTypes';

configure({adapter: new Adapter()});

const mockDispatch = jest.fn();
const mockHistoryPush = jest.fn();

jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
}))

jest.mock("React", () => ({
  useState: jest.fn(),
}));

jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('<Card />', () => {
    let wrapper;
    let props = {
        key: '123',
        id: '001',
        index: '1',
        data: {
          id: '001',
          header: 'header',
          title: 'title',
          body: 'body',
        },
        disabled: false,
        isSelected: false,
        selectMode: false,
        displayedAs: 'group',
      };

    const setCardState = jest.fn();
      
    beforeEach(() => {
      jest.spyOn(React, 'useState').mockImplementation((isEditable) => [
        false,
        setCardState,
      ]);
      wrapper = shallow(<Card {...props}/>);
    });

    afterEach(() => {
      jest.clearAllMocks();
    });
  
    afterAll(() => {
      jest.restoreAllMocks();
    });

    it('should render Card component', () => {
      expect(wrapper).toBeDefined();
    });
    
    it("should render CardHeader", () => {
      expect(wrapper.find(CardHeader)).toHaveLength(1);
    });
  
    it("should render CardBody", () => {
      expect(wrapper.find(CardBody)).toHaveLength(1);
    });

    it('should not open single page from Single page', () => {
      wrapper.setProps({
        displayedAs: 'single',
      });
      expect(wrapper.find('div').prop('onDoubleClick')).toEqual(null);
    });

    it('should redirect to single page on double click', () => {
      wrapper.simulate('doubleClick');
      const mockHistory = jest.fn();
      mockHistoryPush.mockReturnValue(mockHistory);
      expect(mockHistoryPush).toHaveBeenCalledWith('card/001');
    });

    it('should switch card selection checkbox', () => {
      wrapper.setProps({
        selectMode: true,
      });
      wrapper.find(CardHeader).dive().find("input[type='checkbox']")
        .simulate("change",{ target: { checked: true, }, });
      expect(mockDispatch).toHaveBeenCalledWith({
        type: actionTypes.SELECT_CARD, 
        id: props.data.id, 
        val: true,
      });
    });

    it('should enable Edit mode on icon click', () => {
      wrapper.find(CardHeader).dive().find(FaPencilAlt).simulate('click');
      expect(wrapper.find(CardHeader).prop('isEditable')).toEqual(true);
    });

    it('should save changes on icon click', () => {
      wrapper.find(CardHeader).dive().find(FaPencilAlt).simulate('click');
      wrapper.find(CardHeader).dive().find("input[type='text']")
        .simulate("change", { target: { value: 'Updated header',}, });
      wrapper.find(CardHeader).dive().find(FaCheck).simulate('click');
      expect(mockDispatch).toHaveBeenCalledWith({
        type: actionTypes.UPDATE_CARD,
        id: props.data.id,
        vals: {
          ...props.data,
          header: 'Updated header',
        },
      }); 
    });

    it('should decline changes on icon click', () => {
      wrapper.find(CardHeader).dive().find(FaPencilAlt).simulate('click');
      expect(wrapper.find(CardHeader).prop('isEditable')).toEqual(true);
      wrapper.find(CardHeader).dive().find("input[type='text']")
        .simulate("change", { target: { value: 'Updated header',}, });
      wrapper.find(CardHeader).dive().find(FaTimes).simulate('click');
      expect(wrapper.find(CardHeader).prop('isEditable')).toEqual(false);
    });
});
