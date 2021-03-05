/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

function ButtonItem({ item: { value, style }, handleClick }) {
  const buttonClick = () => handleClick(value.toLowerCase());

  return (
    <td colSpan={value === '0' ? 2 : ''}>
      <button
        onClick={buttonClick}
        datavalue={value}
        className={style}
        type="button"
      >
        {value}
      </button>
    </td>
  );
}

ButtonItem.propTypes = {
  item: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default ButtonItem;
