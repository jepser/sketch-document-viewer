import Head from 'next/head';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useRouter } from 'next/router';

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
  const router = useRouter();
  const currentIndex = collection.indexOf(id) + 1;
  const handlePrevious = event => {
    event.preventDefault();
    const previousItem = getPreviousArtboard(collection, id);

    if (!previousItem) return;

    router.push(
      `/[documentId]/artboard/[artboardId]`,
      `/${documentId}/artboard/${previousItem}`
    );
  };

  const handleNext = event => {
    event.preventDefault();
    const nextItem = getNextArtboard(collection, id);
    if (!nextItem) return;

    router.push(
      `/[documentId]/artboard/[artboardId]`,
      `/${documentId}/artboard/${nextItem}`
    );
  };

  const previousItem = getPreviousArtboard(collection, id);
  const nextItem = getNextArtboard(collection, id);
  return (
    <>
      <Head>
        <title>{name} | Sketch viewer</title>
      </Head>
      <MainWrapper>
        <Header>
          <Link href={`/[documentId]`} as={`/${documentId}`}>
            <a>
              <img src="/close.svg" />
            </a>
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
            previousItem={previousItem}
            nextItem={nextItem}
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
