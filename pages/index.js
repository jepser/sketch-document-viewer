import { useQueryArtboardsFromApi } from '@services/sketch';
import Artboards from '@layouts/artboards';

const HomePage = () => {
  const { data, loading, error } = useQueryArtboardsFromApi();

  if (loading) {
    return <div>loading</div>;
  }

  if (error) {
    return null;
  }

  return <Artboards artboards={data.artboards} />;
};

export default HomePage;
