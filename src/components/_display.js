import React from 'react';
import PropTypes from 'prop-types';

function Display({ result }) {
  return (
    <tr>
      <td colSpan="4"><div>{result}</div></td>
    </tr>
  );
}

Display.propTypes = {
  result: PropTypes.number.isRequired,
};

export default Display;
