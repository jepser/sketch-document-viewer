import { useQuery } from '@apollo/react-hooks';
import withData from '@transport/apollo';

import { ARTBOARDS_QUERY } from './graphql';

export const API_BASE_URL = 'https://graphql.sketch.cloud/api';

export const withSketchApi = withData(API_BASE_URL);

const parseArtboardsFromApi = (data = {}) => {
  if (!data.share) return null;

  return data.share.version.document;
};

export const useQueryArtboardsFromApi = id => {
  const { data, loading, error } = useQuery(ARTBOARDS_QUERY);

  const parsedData = parseArtboardsFromApi(data);
  return { data: parsedData, loading, error };
};
