import { useQuery } from '@apollo/react-hooks';
import withData from '@transport/apollo';

import { ARTBOARDS_QUERY } from './graphql';

export const API_BASE_URL = 'https://graphql.sketch.cloud/api';

export const withSketchApi = withData(API_BASE_URL);

const getThumbnailFromArtboard = file => {
  if (!file) return null;

  return file.thumbnails[0].url;
};

const parseArtboard = ({ files, id, name }) => {
  return {
    files,
    id,
    name,
    thumbnail: getThumbnailFromArtboard(files[0])
  };
};

const parseArtboardsFromApi = (data = {}) => {
  if (!data.share) return undefined;

  const rootData = data.share.version.document;

  const artboards = rootData.artboards.entries.map(parseArtboard);

  return {
    artboards,
    name: rootData.name,
    id: rootData.id
  };
};

const filterArtboardById = (artboards, artboardId) => {
  return artboards.find(artboard => artboard.id === artboardId);
};

export const useQueryArtboardsFromApi = documentId => {
  const { data, loading, error } = useQuery(ARTBOARDS_QUERY, {
    variables: { documentId }
  });

  const parsedData = parseArtboardsFromApi(data);

  return { data: parsedData, loading, error };
};

export const useQueryArtboardFromApi = ({ documentId, artboardId }) => {
  const { data, ...rest } = useQueryArtboardsFromApi(documentId);

  const filterArtboard = data
    ? filterArtboardById(data.artboards, artboardId)
    : undefined;

  return { data: filterArtboard, ...rest };
};
