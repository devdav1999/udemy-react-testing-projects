import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

//set up enzyme react adapter

Enzyme.configure({adapter: new EnzymeAdapter()})

/**factory function to create a shallow wrapper for app component
 * @function setup @returns{ShallowWrapper}
 */

const setup = () => shallow(<App/>);

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`)

test("renders without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-app")
  expect(appComponent.length).toBe(1); //appComponent exists
});

test("renders button", () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper,"increment-button");
  expect(button.length).toBe(1); 
});

test("renders counter display", () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper,"counter-display");
  expect(counterDisplay.length).toBe(1); 
});

test("counter start at 0", () => {
  const wrapper = setup();
  const count = findByTestAttr(wrapper,"count").text();
  expect(count).toBe("0");
});

test("clicking on button increments display", () => {
  const wrapper =setup();
  //find button
  const button = findByTestAttr(wrapper,"increment-button");
  //click button
  button.simulate('click');
  //find display and test if number has been matched
  const count = findByTestAttr(wrapper,"count").text();
  expect(count).toBe("1");
});

test("clicking on decrement button decreases display", () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, "decrement-button");
  button.simulate('click');
  const count = findByTestAttr(wrapper, "count").text()
  expect(count).toBe("-1");
})