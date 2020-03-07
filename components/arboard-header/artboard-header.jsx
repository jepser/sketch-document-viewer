import PropTypes from 'prop-types';

import Flex from '@components/flex';
import Text from '@components/text';
import Navigator from '@components/navigator';

import { Root } from './styled-components';

const ArtboardHeader = ({ title, current, total, onNext, onPrevious }) => {
  return (
    <Flex as={Root} justify="space-between">
      <Navigator
        current={current}
        total={total}
        onNext={onNext}
        onPrevious={onPrevious}
      />
      <Text>{title}</Text>
      <div />
    </Flex>
  );
};

ArtboardHeader.propTypes = {
  title: PropTypes.string,
  current: PropTypes.number,
  total: PropTypes.number,
  onNext: PropTypes.func.isRequired,
  onPrevious: PropTypes.func.isRequired
};

export default ArtboardHeader;
