import React from 'react';
import {shallow} from 'enzyme';

import Game from './game';

describe('<Game />', () => {
  it('Renders without crashing', () => {
    shallow(<Game />);
  });

  it('Handles NewGame()', () => {
    const wrapper = shallow(<Game />);
    wrapper.setState({
      guesses: [1, 2, 3],
      feedback: "feedback message",
      correctAnswer: "number"
    })

    wrapper.update()
    wrapper.instance().newGame()

    expect(wrapper.state('guesses')).toEqual([]);
    expect(wrapper.state('feedback')).toEqual('Make your guess!');
    expect(wrapper.state('correctAnswer')).toBeGreaterThan(0);
    expect(wrapper.state('correctAnswer')).toBeLessThan(101);
  });

  it('Handles guess()', () => {
    const wrapper = shallow(<Game />);
    wrapper.setState( {correctAnswer: 50} )

    wrapper.update()

    wrapper.instance().guess(0)
    expect(wrapper.state('feedback')).toEqual('You\'re Ice Cold...')

    wrapper.instance().guess(20)
    expect(wrapper.state('feedback')).toEqual('You\'re Cold...')

    wrapper.instance().guess(40)
    expect(wrapper.state('feedback')).toEqual('You\'re Warm')

    wrapper.instance().guess(49)
    expect(wrapper.state('feedback')).toEqual('You\'re Hot!')

    wrapper.instance().guess(50)
    expect(wrapper.state('feedback')).toEqual('You got it!')

    expect(wrapper.state('guesses')).toEqual([0, 20, 40, 49, 50]);
  });
});
