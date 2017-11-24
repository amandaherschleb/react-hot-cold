import React from 'react';
import {shallow, mount} from 'enzyme';

import InfoModal from './info-modal';

describe('<InfoModal />', () => {
  it('Renders without crashing', () => {
    shallow(<InfoModal />);
  });

  it('Renders the info modal', () => {
    const wrapper = shallow(<InfoModal />);
    expect(wrapper.find('#modal').exists()).toEqual(true);
  });

  it('Should run onClose when the close link is clicked', () => {
    const callback = jest.fn();
    const wrapper = shallow(<InfoModal onClose={callback} />);

    wrapper.find('.close').simulate('click', {
      preventDefault() {}
    })
    expect(callback).toHaveBeenCalled();
  })
});
