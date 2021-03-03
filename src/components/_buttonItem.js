/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

function ButtonItem({ item: { value } }) {
  return (
    <td><button type="button">{value}</button></td>
  );
}

ButtonItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ButtonItem;
