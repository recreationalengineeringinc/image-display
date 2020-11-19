import React from 'react';
import {mount, shallow} from 'enzyme';
import App from '../client/components/app.jsx';

const photos = {}; //FILL THIS IN
const colors = {}; //FILL THIS IN
const sizes = {}; //FILL THIS IN

it('works', () => {
  const wrap = shallow(
    <App />
  );
  expect(wrap.text()).toEqual('REI WEBSITE');
});

describe('color buttons should be setup correctly', () => {

  const wrap = shallow(
    <App />
  );
  test('expect number of color buttons to equal number of colors', () => {
    expect(wrap.find('.color')).to.have.lengthOf(colors.length);
  });

  test('expect clicking color button to change color state', () => {
    const original = wrap.prop('colorDisplayed');
    wrap.find({id: '#color', key: 2}).simulate('click');
    expect(wrap.prop('colorDisplayed')).not.toEqual(original);

  });
});

describe('size buttons should be setup correctly', () => {
  const wrap = shallow(
    <App />
  );
   test('expect clicking color button to change color state', () => {
    const original = wrap.prop('sizeSelected');
    wrap.find({id: '#size', key: 2}).simulate('click');
    expect(wrap.prop('sizeSelected')).not.toEqual(original);
  });
});

describe('photo preview bar should be setup correctly', () => {
  const wrap = shallow(
    <App />
  );
  test('expect number of photos in photo preview to equal number of photos', () => {
    expect(wrap.find('#photo-carousel')).to.have.lengthOf(photos.length);
  });

  test('expect clicking photo preview to change photo in photo display', () => {
    const original = wrap.prop('sizeSelected');
    wrap.find({id: '#size', key: 2}).simulate('click');
    expect(wrap.prop('sizeSelected')).not.toEqual(original);
  });
});

describe('main display should be setup correctly', () => {
  const wrap = shallow(
    <App />
  );
    //TO DO
  test('expect hovering display image to trigger set state', () => {
    wrap.find('#main').simulate('hover');
    expect(wrap.prop('zoomIn')).toEqual(true);
  });
});