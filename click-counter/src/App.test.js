import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

//set up enzyme react adapter

Enzyme.configure({adapter: new EnzymeAdapter()})

test("renders without error", () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find("[data-test='component-app']");
  expect(appComponent.length).toBe(1); //appComponent exists
});

test("renders button", () => {

});

test("renders counter display", () => {

});

test("counter start at 0", () => {

});

test("clicking on button increments display", () => {

});