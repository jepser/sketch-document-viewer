import PropTypes from 'prop-types';
import { useQueryArtboardsFromApi } from '@services/sketch';
import ArtboardLayout from '@layouts/artboard';
import Text from '@components/text';

const ArtboardPage = ({ artboardId, documentId }) => {
  const { data = {}, loading, error } = useQueryArtboardsFromApi(documentId);

  if (error) {
    return <Text>Ups... something went wrong 😅</Text>;
  }

  const { artboards = [] } = data;

  const currentArtboard = artboards
    ? artboards.find(artboard => artboard.id === artboardId)
    : {};

  const collection = artboards ? artboards.map(artboard => artboard.id) : [];

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
