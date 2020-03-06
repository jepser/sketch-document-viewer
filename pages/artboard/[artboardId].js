import PropTypes from 'prop-types';
import { useQueryArtboardFromApi } from '@services/sketch';
import ArtboardLayout from '@layouts/artboard';

const ArtboardPage = ({ artboardId }) => {
  const { data, loading, error } = useQueryArtboardFromApi({
    artboardId
  });

  if (loading) {
    return <div>loading</div>;
  }

  if (error) {
    return null;
  }

  console.log({ artboardId, data });

  return <ArtboardLayout {...data} />;
};

ArtboardPage.getInitialProps = ({ query }) => {
  return {
    artboardId: query.artboardId
  };
};

ArtboardPage.propTypes = {
  artboardId: PropTypes.string.isRequired
};

export default ArtboardPage;
