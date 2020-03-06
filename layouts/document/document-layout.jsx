import Head from 'next/head';
import PropTypes from 'prop-types';

import Header, { Separator } from '@components/header';
import { MainWrapper } from '@components/layout';
import Text from '@components/text';

const DocumentLayout = ({ artboards }) => {
  return (
    <>
      <Head>
        <title>Documents | Sketch viewer</title>
      </Head>
      <MainWrapper>
        <Header>
          <Separator />
          <Text>Document name</Text>
        </Header>
        {artboards.entries.map(entry => {
          return <div key={entry.id}>{entry.name}</div>;
        })}
      </MainWrapper>
    </>
  );
};

DocumentLayout.propTypes = {
  artboards: PropTypes.array.isRequired
};

export default DocumentLayout;
