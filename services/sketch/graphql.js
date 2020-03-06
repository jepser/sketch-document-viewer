import gql from 'graphql-tag';

export const ARTBOARDS_QUERY = gql`
  query getDocument($documentId: String!) {
    share(shortId: $documentId) {
      shortId
      version {
        document {
          name
          artboards {
            entries {
              id
              name
              isArtboard
              files {
                url
                height
                width
                scale
                thumbnails {
                  url
                  height
                  width
                }
              }
            }
          }
        }
      }
    }
  }
`;
