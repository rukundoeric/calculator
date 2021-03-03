import React from 'react';
import PropTypes from 'prop-types';

function Display({ result }) {
  return (
    <thead height="100px">
      <tr>
        <td colSpan="4"><div className="res">{result}</div></td>
      </tr>
    </thead>
  );
}

Display.propTypes = {
  result: PropTypes.number.isRequired,
};

export default Display;
