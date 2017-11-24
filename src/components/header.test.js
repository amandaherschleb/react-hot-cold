import React from 'react';
import {shallow, mount} from 'enzyme';

import Header from './header';

describe('<Header />', () => {
  it('Renders without crashing', () => {
    shallow(<Header />);
  });

  it('Renders the header', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.contains(<h1>HOT or COLD</h1>)).toEqual(true);
  });

  it('Should hide the infoModal on first render', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.state('showInfoModal')).toEqual(false)
    expect(wrapper.find('InfoModal').exists()).toEqual(false)
  })

  it('Should show the infoModal on info toggle', () => {
    const wrapper = shallow(<Header />);
    wrapper.instance().toggleInfoModal();
    wrapper.update();
    expect(wrapper.state('showInfoModal')).toEqual(true)
    expect(wrapper.find('InfoModal').exists()).toEqual(true)
  })
});
