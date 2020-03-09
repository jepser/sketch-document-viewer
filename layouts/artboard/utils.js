export const getPreviousArtboard = (collection, currentId) => {
  const currentIndex = collection.indexOf(currentId);

  if (currentIndex > 0) {
    return collection[currentIndex - 1];
  }

  return undefined;
};

export const getNextArtboard = (collection, currentId) => {
  const currentIndex = collection.indexOf(currentId);

  if (currentIndex < collection.length) {
    return collection[currentIndex + 1];
  }

  return undefined;
};
