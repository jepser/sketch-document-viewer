import React from 'react';
import PropTypes from 'prop-types';

import { Root } from './styled-components';

const BASE_PROPS = ['top', 'left', 'right', 'bottom'];

const Spacer = ({ top, left, bottom, right, children, inline, ...rest }) => {
  return (
    <Root
      bottom={bottom}
      inline={inline}
      left={left}
      right={right}
      top={top}
      {...rest}
    >
      {children}
    </Root>
  );
};

Spacer.propTypes = {
  bottom: PropTypes.number,
  children: PropTypes.any,
  inline: PropTypes.bool,
  left: PropTypes.number,
  right: PropTypes.number,
  top: PropTypes.number
};

export default Spacer;
