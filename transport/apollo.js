import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import withApollo from 'next-with-apollo';
import { createHttpLink } from 'apollo-link-http';
import fetch from 'isomorphic-unfetch';

export default url =>
  withApollo(
    ({ initialState }) =>
      new ApolloClient({
        link: createHttpLink({
          fetch,
          uri: url
        }),
        ssrMode: !process.browser,
        cache: new InMemoryCache().restore(initialState || {})
      })
  );
