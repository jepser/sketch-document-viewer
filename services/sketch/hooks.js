import { useQuery } from '@apollo/react-hooks';
import { ARTBOARDS_QUERY } from './graphql';
import { parseArtboardsFromApi } from './utils';

export const useQueryArtboardsFromApi = documentId => {
  const { data, loading, error } = useQuery(ARTBOARDS_QUERY, {
    variables: { documentId }
  });

  const parsedData = parseArtboardsFromApi(data);

  return { data: parsedData, loading, error };
};
