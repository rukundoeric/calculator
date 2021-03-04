/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import key from 'uniqid';
import ButtonItem from './_buttonItem';

function ButtonGroupItem({ group: buttons }) {
  return (
    <tr>
      {buttons.map(item => (<ButtonItem item={item} key={key(item.value)} />))}
    </tr>
  );
}

ButtonGroupItem.propTypes = {
  group: PropTypes.array.isRequired,
};

export default ButtonGroupItem;
