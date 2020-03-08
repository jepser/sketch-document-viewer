import PropTypes from 'prop-types';
import { useQueryArtboardsFromApi } from '@services/sketch';
import ArtboardLayout from '@layouts/artboard';

const ArtboardPage = ({ artboardId, documentId }) => {
  const { data = {}, loading, error } = useQueryArtboardsFromApi(documentId);

  if (error) {
    return null;
  }

  const { artboards = [] } = data;

  const currentArtboard = artboards
    ? artboards.find(artboard => artboard.id === artboardId)
    : {};

  const collection = artboards ? artboards.map(artboard => artboard.id) : [];

  console.log({ artboards, currentArtboard });

  return (
    <ArtboardLayout
      {...currentArtboard}
      documentId={documentId}
      collection={collection}
      loading={loading}
    />
  );
};

ArtboardPage.getInitialProps = ({ query }) => {
  return {
    artboardId: query.artboardId,
    documentId: query.documentId
  };
};

ArtboardPage.propTypes = {
  artboardId: PropTypes.string.isRequired,
  documentId: PropTypes.string.isRequired
};

export default ArtboardPage;
