import PropTypes from 'prop-types';
import { Root } from './styled-components';
import { colors } from '@constants';

const Text = ({ children, color, size, as }) => {
  return (
    <Root color={color} size={size} as={as}>
      {children}
    </Root>
  );
};

Text.propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOf(Object.values(colors)),
  size: PropTypes.number,
  as: PropTypes.node
};

export default Text;
