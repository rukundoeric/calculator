import React from 'react';
import PropTypes from 'prop-types';

function Display({ result }) {
  return (
    <thead id="dispay-h" height="100px">
      <tr>
        <td colSpan="4"><div data-testid="display_res" className="res">{result}</div></td>
      </tr>
    </thead>
  );
}

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};

export default Display;
