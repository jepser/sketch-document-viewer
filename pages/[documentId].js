import PropTypes from 'prop-types';

import { useQueryArtboardsFromApi } from '@services/sketch';
import DocumentLayout from '@layouts/document';

const DocumentPage = ({ documentId }) => {
  const { data = {}, loading, error } = useQueryArtboardsFromApi(documentId);

  if (error) {
    return null;
  }

  const { artboards = [], name = '' } = data;

  return <DocumentLayout artboards={artboards} name={name} />;
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
