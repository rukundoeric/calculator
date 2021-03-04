/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

function ButtonItem({ item: { value, style } }) {
  return (
    <td colSpan={value === '0' ? 2 : ''}>
      <button className={style} type="button">{value}</button>
    </td>
  );
}

ButtonItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ButtonItem;
