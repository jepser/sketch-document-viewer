const Home = () => null;

Home.getInitialProps = ({ res }) => {
  if (res) {
    res.writeHead(301, {
      Location: '/Y8wDM' // this is left so the application doesn't break
    });
    res.end();
  }

  return {};
};

export default Home;
