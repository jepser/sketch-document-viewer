import { useState } from 'react';
import PropTypes from 'prop-types';

import { Image, Loading } from './styled-components';

const ArtboardImage = ({ src, alt, srcSet }) => {
  const [loaded, setLoad] = useState(false);

  const handleOnLoad = () => {
    setLoad(true);
  };

  return (
    <>
      {!loaded && (
        <Loading data-qa="artboard-image-loading" src="/loading.svg" />
      )}
      <Image
        data-qa="artboard-image"
        hidden={!loaded}
        onLoad={handleOnLoad}
        src={src}
        alt={alt}
        srcSet={srcSet}
      />
    </>
  );
};

ArtboardImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  srcSet: PropTypes.string
};

export default ArtboardImage;
