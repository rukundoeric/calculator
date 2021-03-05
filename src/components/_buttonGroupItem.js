/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import key from 'uniqid';
import ButtonItem from './_buttonItem';

function ButtonGroupItem({ group: buttons, handleClick }) {
  return (
    <tr>
      {
        buttons.map(item => (
          <ButtonItem handleClick={handleClick} item={item} key={key(item.value)} />))
      }
    </tr>
  );
}

ButtonGroupItem.propTypes = {
  group: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default ButtonGroupItem;
