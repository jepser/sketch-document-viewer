import PropTypes from 'prop-types';

import { useQueryArtboardsFromApi } from '@services/sketch';
import DocumentLayout from '@layouts/document';
import Text from '@components/text';

const DocumentPage = ({ documentId }) => {
  const { data = {}, loading, error } = useQueryArtboardsFromApi(documentId);

  if (error) {
    return <Text>Ups... something went wrong 😅</Text>;
  }

  const { artboards = [], name = '' } = data;

  return (
    <DocumentLayout artboards={artboards} name={name} documentId={documentId} />
  );
};

DocumentPage.getInitialProps = ({ query }) => {
  return {
    documentId: query.documentId
  };
};

DocumentPage.propTypes = {
  documentId: PropTypes.string.isRequired
};

export default DocumentPage;
