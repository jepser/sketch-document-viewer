import Spacer from '@components/spacer';
import { Root, Content } from './styled-components';
import PropTypes from 'prop-types';

const Header = ({ children }) => {
  return (
    <Root>
      <Spacer top={2} right={2} left={2} bottom={2}>
        <Content>{children}</Content>
      </Spacer>
    </Root>
  );
};

Header.propTypes = {
  children: PropTypes.node
};

export default Header;
