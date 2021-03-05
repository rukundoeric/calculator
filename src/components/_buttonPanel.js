import React from 'react';
import key from 'uniqid';
import PropTypes from 'prop-types';
import ButtonGroupItem from './_buttonGroupItem';
import buttons from '../data/buttons.json';

function ButtonPanel({ handleClick }) {
  return (
    <tbody>
      {
      buttons.map(group => (
        <ButtonGroupItem handleClick={handleClick} group={group} key={key()} />))
      }
    </tbody>
  );
}

ButtonPanel.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default ButtonPanel;
