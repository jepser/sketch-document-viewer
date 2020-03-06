import gql from 'graphql-tag';

export const ARTBOARDS_QUERY = gql`
  {
    share(shortId: "Y8wDM") {
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
