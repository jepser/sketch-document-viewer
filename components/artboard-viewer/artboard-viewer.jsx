import PropTypes from 'prop-types';

import Spacer from '@components/spacer';
import Flex from '@components/flex';

import { Root, Image, Container } from './styled-components';

const getImageSrcSet = files => {
  return files
    .reduce((images, image) => {
      return [...images, `${image.url} ${image.width}`];
    }, [])
    .join(',');
};

export const ArtboardViewer = ({ files = [], name = '' }) => {
  console.log({ files });

  const mainImage = files[0];
  const imageSources = getImageSrcSet(files);

  if (!mainImage) return null;

  return (
    <Spacer top={3} bottom={3} left={3} right={3} as={Root}>
      <Flex justify="center" align="center" as={Container}>
        <Image src={mainImage.url} srcSet={imageSources} alt={name} />
      </Flex>
    </Spacer>
  );
};

ArtboardViewer.propTypes = {
  files: PropTypes.array,
  name: PropTypes.string
};

export default ArtboardViewer;
