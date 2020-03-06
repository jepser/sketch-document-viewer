import Head from 'next/head';
import PropTypes from 'prop-types';

import Header, { Separator } from '@components/header';
import { MainWrapper } from '@components/layout';
import Text from '@components/text';
import Flex from '@components/flex';
import Spacer from '@components/spacer';
import Artboard from '@components/artboard';

const DocumentLayout = ({ artboards, name }) => {
  return (
    <>
      <Head>
        <title>{name} | Sketch viewer</title>
      </Head>
      <MainWrapper>
        <Header>
          <Spacer right={1}>
            <img src="/sketch-logo.svg" />
          </Spacer>
          <Separator />
          <Spacer left={1}>
            <Text>{name}</Text>
          </Spacer>
        </Header>
        <Spacer top={3} bottom={3}>
          <Flex justify="space-between">
            {artboards.map(({ id, name, thumbnail }) => {
              return (
                <Artboard key={id} id={id} name={name} thumbnail={thumbnail} />
              );
            })}
          </Flex>
        </Spacer>
      </MainWrapper>
    </>
  );
};

DocumentLayout.propTypes = {
  artboards: PropTypes.array.isRequired,
  name: PropTypes.string
};

export default DocumentLayout;
