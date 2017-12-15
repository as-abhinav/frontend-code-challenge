import {expect} from 'chai';
import {shallow} from 'enzyme';
import React from 'react';
import App from './app';

xdescribe('<App />', () => {
  let app;
  let props;

  beforeEach(() => {
    props = {
      getProperties: () => {
      }
    };
    app = shallow(<App/>);
  });

  xit('should render app', () => {
    console.log(app);
    expect(app.length).toEqual(1);
    expect(app.find('.wrapper').length).toEqual(1);
  });

  xit('should render header, main content area', () => {
    expect(app.find('Header').length).toEqual(1);
    expect(app.find('.main-content').length).toEqual(1);
  });

});