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

export const parseArtboardsFromApi = (data = {}) => {
  if (!data.share) return undefined;

  const rootData = data.share.version.document;

  const artboards = rootData.artboards.entries.map(parseArtboard);

  return {
    artboards,
    name: rootData.name,
    id: rootData.id
  };
};
