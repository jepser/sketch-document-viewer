import React from 'react';
import PropTypes from 'prop-types';
import Flex from '@components/flex';
import {
  Caption,
  ImageWrap,
  Image,
  Root,
  Content,
  Anchor
} from './styled-components';
import Spacer from '@components/spacer';
import Link from 'next/link';

const Artboard = ({ id, name, thumbnail }) => {
  return (
    <Spacer as={Content} right={3} left={3} bottom={3}>
      <Link href={`/artboard/${id}`}>
        <Anchor>
          <Root>
            <ImageWrap>
              <Flex direction="column">
                <Image src={thumbnail} />
              </Flex>
            </ImageWrap>
            <Spacer top={2}>
              <Caption>{name}</Caption>
            </Spacer>
          </Root>
        </Anchor>
      </Link>
    </Spacer>
  );
};

Artboard.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  thumbnail: PropTypes.string
};

export default Artboard;
