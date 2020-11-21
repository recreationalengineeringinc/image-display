import React from 'react';
import {mount, shallow} from 'enzyme';
import App from '../client/components/app.jsx';
import Colors from '../client/components/colorButtons/colors.jsx';
// import dummyData from './dummyData.js';

let colors = ['red'];
let hex = ['#B7BAC3'];
let colorDisplayed = 'red';
let prices = {
  red: 1
};

describe('App renders properly', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('renders header', () => {
    const wrapper = shallow(<App />);
    const header = <h2><img class="svg-logo" src="//satchel.rei.com/media/img/header/rei-co-op-logo-white.svg" alt="Go to REI.com Home Page"></img></h2>;
    expect(wrapper.contains(header)).toEqual(true);
  });

  it('works', () => {
    const wrap = shallow(
      <App />
    );
    expect(wrap.text()).toContain('<Images /><Info /><Colors /><Sizes /><Checkout />');
  });
});

describe('', () => {
  it('accepts user account props', () => {
    const wrapper = mount(<Colors displayedColor={'red'} />);
    expect(wrapper.props().displayedColor).toEqual('red');
  });
  it('contains users account email', () => {
    const wrapper = mount(<Account user={user} />);
    const value = wrapper.find('p').text();
    expect(value).toEqual('david@gmail.com');
  });
});


describe('color buttons should be setup correctly', () => {

  it('Reviews state to have properties passed.', () => {
    const wrapper = mount(<App />);
    wrapper.setState({
      prices: {
        'red': 1
      }
    });
    expect(wrapper.find('Colors').prop('prices')).toHaveProperty('red', 1);
  }

    // test('expect number of color buttons to equal number of colors', () => {

  //   expect(wrap.render().find('.color')).prop('style').toHaveProperty('backgroundColor', '#B7BAC3');
  // }
  );

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