import withData from '@transport/apollo';

export const API_BASE_URL = 'https://graphql.sketch.cloud/api';

export const withSketchApi = withData(API_BASE_URL);
