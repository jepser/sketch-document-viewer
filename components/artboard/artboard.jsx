import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import Flex from '@components/flex';
import Spacer from '@components/spacer';

import {
  Caption,
  ImageWrap,
  Image,
  Root,
  Content,
  Anchor
} from './styled-components';

const Artboard = ({ id, name, thumbnail, documentId }) => {
  return (
    <Spacer as={Content} right={3} left={3} bottom={3}>
      <Link data-qa="artboard-link" href={`/${documentId}/artboard/${id}`}>
        <Anchor>
          <Root>
            <ImageWrap>
              <Flex direction="column">
                <Image data-qa="artboard-image" src={thumbnail} alt={name} />
              </Flex>
            </ImageWrap>
            <Spacer top={2}>
              <Caption data-qa="artboard-name">{name}</Caption>
            </Spacer>
          </Root>
        </Anchor>
      </Link>
    </Spacer>
  );
};

Artboard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  documentId: PropTypes.string.isRequired
};

export default Artboard;
