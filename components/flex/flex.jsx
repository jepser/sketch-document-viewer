import PropTypes from 'prop-types';
import { Root } from './styled-components';

const Flex = ({ children, direction, align, justify, wrap }) => {
  return (
    <Root direction={direction} align={align} justify={justify} wrap={wrap}>
      {children}
    </Root>
  );
};

Flex.propTypes = {
  children: PropTypes.node,
  direction: PropTypes.string,
  align: PropTypes.string,
  justify: PropTypes.string,
  wrap: PropTypes.string
};

export default Flex;
