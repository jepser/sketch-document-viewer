import Head from 'next/head';
import PropTypes from 'prop-types';
import Link from 'next/link';

import Header, { Separator } from '@components/header';
import { MainWrapper } from '@components/layout';
import Text from '@components/text';
import Flex from '@components/flex';
import Spacer from '@components/spacer';
import ArtboardHeader from '@components/arboard-header';

const ArtboardLayout = ({
  files = [],
  id = 0,
  name = '',
  collection = [],
  documentId
}) => {
  const currentIndex = collection.indexOf(id);
  const handlePrevious = () => {
    console.log('previous');
  };

  const handleNext = () => {
    console.log('thank you next');
  };
  return (
    <>
      <Head>
        <title>{name} | Sketch viewer</title>
      </Head>
      <MainWrapper>
        <Header>
          <Spacer right={2}>
            <Link href={`/${documentId}`}>
              <img src="/close.svg" />
            </Link>
          </Spacer>
          <Separator />
          <ArtboardHeader
            title={name}
            current={currentIndex}
            total={collection.length}
            onPrevious={handlePrevious}
            onNext={handleNext}
          />
        </Header>
        <Spacer top={3} bottom={3}>
          asdfasdf
        </Spacer>
      </MainWrapper>
    </>
  );
};

ArtboardLayout.getInitialProps = ({ query }) => {
  return {
    artboardId: query.artboardId
  };
};

ArtboardLayout.propTypes = {
  files: PropTypes.array,
  documentId: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  collection: PropTypes.array
};

export default ArtboardLayout;
