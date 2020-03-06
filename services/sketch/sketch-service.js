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
  if (!data.share) return null;

  const rootData = data.share.version.document;

  const artboards = rootData.artboards.entries.map(parseArtboard);

  return {
    artboards,
    name: rootData.name
  };
};

export const useQueryArtboardsFromApi = id => {
  const { data, loading, error } = useQuery(ARTBOARDS_QUERY);

  console.log(data);

  const parsedData = parseArtboardsFromApi(data);
  return { data: parsedData, loading, error };
};
