import React from 'react';
import key from 'uniqid';
import ButtonGroupItem from './_buttonGroupItem';
import buttons from '../data/buttons.json';

function ButtonPanel() {
  return (
    <tbody>
      {buttons.map(group => (<ButtonGroupItem group={group} key={key()} />))}
    </tbody>
  );
}

export default ButtonPanel;
