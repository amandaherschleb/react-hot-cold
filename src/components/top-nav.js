import React from 'react';
import {connect} from 'react-redux';
import {newGame, showInfo} from '../actions';

import './top-nav.css';

export function TopNav(props) {
  function onNewGame(e) {
    e.preventDefault();
    props.dispatch(newGame())
  }

  function onInfo(e) {
    e.preventDefault();
    // toggle show boolean
    let show = !props.showInfoModal;
    props.dispatch(showInfo(show))
  }

  return (
    <nav>
      <ul className="clearfix">
        <li>
          <a className="what" href="#" onClick={onInfo}>
              What?
          </a>
        </li>
        <li>
          <a className="new" href="#" onClick={onNewGame}>
            + New Game
          </a>
        </li>
      </ul>
    </nav>
  );
};

const mapStateToProps = state => ({
  showInfoModal: state.showInfoModal
});

export default connect(mapStateToProps)(TopNav);
