import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toHaveLength(1);
});

it('renders a red square by default', () => {
  const wrapper = shallow(<App />);
  const statusShape = wrapper.find('div');
  expect(statusShape.props().style.backgroundColor).toEqual('red');
});

it('should trigger a motion', () => {
  const wrapper = shallow(<App />);
  wrapper.instance().calcDiff([[1,1], [1,1]]);
  wrapper.instance().calcDiff([[255,255], [255,255]]);
  
  expect(wrapper.state('motionDetected')).toEqual(true);
});

it('should have a motion history with one positive and one negative result', () => {
  const wrapper = shallow(<App />);
  wrapper.instance().calcDiff([[1,1], [1,1]]);
  wrapper.instance().calcDiff([[255,255], [255,255]]);
  
  expect(wrapper.state('motionHistory')).toEqual([true, false]);
});