import { useQueryArtboardsFromApi } from '@services/sketch';
import DocumentLayout from '@layouts/document';

const HomePage = () => {
  const { data, loading, error } = useQueryArtboardsFromApi();

  if (loading) {
    return <div>loading</div>;
  }

  if (error) {
    return null;
  }

  return <DocumentLayout artboards={data.artboards} name={data.name} />;
};

export default HomePage;
