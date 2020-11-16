import React from 'react';
import {mount, shallow} from 'enzyme';
import App from '../client/components/app.jsx';

it('works', () => {
  const wrap = shallow(
    <App />
  );

  expect(wrap.text()).toEqual('HELLO WORLD REACT WORKING');
});