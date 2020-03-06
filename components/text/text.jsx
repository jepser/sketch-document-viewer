import { Root } from './styled-components';

const Text = ({ children, color, variant }) => {
  return (
    <Root color={color} variant={variant}>
      {children}
    </Root>
  );
};

export default Text;
