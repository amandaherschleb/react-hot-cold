import React from 'react';
import {shallow} from 'enzyme';

import TopNav from './top-nav';

describe('<TopNav />', () => {
  it('Renders without crashing', () => {
    shallow(<TopNav />);
  });

  it('Should run onInfo when the what link is clicked', () => {
    const callback = jest.fn();
    const wrapper = shallow(<TopNav onInfo={callback} />);

    wrapper.find('.what').simulate('click', {
      preventDefault() {}
    })
    expect(callback).toHaveBeenCalled();
  })

  it('Should run onNewGame when the new link is clicked', () => {
    const callback = jest.fn();
    const wrapper = shallow(<TopNav onNewGame={callback} />);

    wrapper.find('.new').simulate('click', {
      preventDefault() {}
    })
    expect(callback).toHaveBeenCalled();
  })
});
