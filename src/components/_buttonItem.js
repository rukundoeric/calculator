import React from 'react';
import PropTypes from 'prop-types';

function ButtonItem({ value }) {
  return (
    <td><button type="button">{value}</button></td>
  );
}

ButtonItem.propTypes = {
  value: PropTypes.string.isRequired,
};

export default ButtonItem;
