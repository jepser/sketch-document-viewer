export const getImageSrcSet = files => {
  return files
    .reduce((images, image) => {
      return [...images, `${image.url} ${image.width}`];
    }, [])
    .join(',');
};
