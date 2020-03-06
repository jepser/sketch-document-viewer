import Head from 'next/head';
import PropTypes from 'prop-types';

import Header from '@components/header';
import { MainWrapper } from '@components/layout';

const DocumentLayout = ({ artboards }) => {
  return (
    <>
      <Head>
        <title>Documents | Sketch viewer</title>
      </Head>
      <MainWrapper>
        <Header />
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
