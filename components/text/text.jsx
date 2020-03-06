import PropTypes from 'prop-types';
import { Root } from './styled-components';
import { colors } from '@constants';

const Text = ({ children, color, variant }) => {
  return (
    <Root color={color} variant={variant}>
      {children}
    </Root>
  );
};

Text.propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOf(Object.values(colors)),
  variant: PropTypes.string
};

export default Text;
