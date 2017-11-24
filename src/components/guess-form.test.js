import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessForm from './guess-form';

describe('<GuessForm />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessForm />);
    });

    it('Should fire the onGuess callback when the form is submitted', () => {
      const callback = jest.fn();
      const wrapper = mount(<GuessForm onGuess={callback} />);

      wrapper.find('input[type="text"]').simulate('change', { input: { value: 10 } })
      wrapper.simulate('submit');
      expect(callback).toHaveBeenCalled();
    });

    it('Should clear the input when the form is submitted', () => {
      const wrapper = mount(<GuessForm />);
      const value = 10;
      wrapper.find('input[type="text"]').value = value;
      wrapper.simulate('submit');
      expect(wrapper.find('input[type="text"]').value).toEqual(undefined);
    });
});
