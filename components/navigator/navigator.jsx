import PropTypes from 'prop-types';
import Flex from '@components/flex';
import Text from '@components/text';

const Navigator = ({ onPrevious, onNext, total, current }) => {
  return (
    <Flex>
      <button onClick={onPrevious}>
        <img src="/arrow-left.svg" alt="previous" />
      </button>
      <Text>
        {current}/{total}
      </Text>
      <button onClick={onNext}>
        <img src="/arrow-right.svg" alt="next" />
      </button>
    </Flex>
  );
};

Navigator.propTypes = {
  onPrevious: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
  current: PropTypes.current.isRequired
};

export default Navigator;
