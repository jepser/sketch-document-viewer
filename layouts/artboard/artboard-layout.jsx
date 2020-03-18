import Head from 'next/head';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Router from 'next/router';

import Header, { Separator } from '@components/header';
import { MainWrapper } from '@components/layout';
import Text from '@components/text';
import Flex from '@components/flex';
import Spacer from '@components/spacer';
import ArtboardHeader from '@components/arboard-header';
import ArtboardViewer from '@components/artboard-viewer';
import { getPreviousArtboard, getNextArtboard } from './utils';

const ArtboardLayout = ({
  files = [],
  id = 0,
  name = '',
  collection = [],
  documentId
}) => {
  const currentIndex = collection.indexOf(id) + 1;
  const handlePrevious = () => {
    const previousItem = getPreviousArtboard(collection, id);
    if (!previousItem) return;

    Router.push(`/${documentId}/artboard/${previousItem}`);
  };

  const handleNext = () => {
    const nextItem = getNextArtboard(collection, id);
    if (!nextItem) return;
    Router.push(`/${documentId}/artboard/${nextItem}`);
  };
  return (
    <>
      <Head>
        <title>{name} | Sketch viewer</title>
      </Head>
      <MainWrapper>
        <Header>
          <Link href={`/${documentId}`}>
            <img src="/close.svg" />
          </Link>
          <Spacer left={2} right={2}>
            <Separator />
          </Spacer>
          <ArtboardHeader
            title={name}
            current={currentIndex}
            total={collection.length}
            onPrevious={handlePrevious}
            onNext={handleNext}
          />
        </Header>
        <ArtboardViewer files={files} name={name} />
      </MainWrapper>
    </>
  );
};

ArtboardLayout.propTypes = {
  files: PropTypes.array,
  documentId: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  collection: PropTypes.array
};

export default ArtboardLayout;
