/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import ButtonItem from './_buttonItem';

function ButtonGroupItem({ group: buttons }) {
  return (
    <tr>
      {buttons.map(item => (<ButtonItem item={item} key={`key_${item.key}`} />))}
    </tr>
  );
}

ButtonGroupItem.propTypes = {
  group: PropTypes.array.isRequired,
};

export default ButtonGroupItem;
