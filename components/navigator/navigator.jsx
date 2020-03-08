import PropTypes from 'prop-types';

import Flex from '@components/flex';
import Text from '@components/text';
import Spacer from '@components/spacer';
import { colors } from '@constants';

import { Button, Image } from './styled-components';

const Navigator = ({ onPrevious, onNext, total, current }) => {
  return (
    <Flex align="center">
      <Button onClick={onPrevious} data-qa="navigator-previous-button">
        <Image src="/arrow-left.svg" alt="previous" />
      </Button>
      <Spacer left={1} right={1}>
        <Text
          color={colors.softGrey}
          size={12}
          as="p"
          data-qa="navigator-counter"
        >
          {current} / {total}
        </Text>
      </Spacer>
      <Button onClick={onNext} data-qa="navigator-next-button">
        <Image src="/arrow-right.svg" alt="next" />
      </Button>
    </Flex>
  );
};

Navigator.propTypes = {
  onPrevious: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
  current: PropTypes.number.isRequired
};

export default Navigator;
