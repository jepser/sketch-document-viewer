import App from 'next/app';
import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { GlobalStyles } from '@components/layout';
import { withSketchApi } from '@services/sketch';

class SketchApp extends App {
  render() {
    const { Component, pageProps, apollo } = this.props;
    return (
      <>
        <GlobalStyles />
        <ApolloProvider client={apollo}>
          <Component {...pageProps} />
        </ApolloProvider>
      </>
    );
  }
}

export default withSketchApi(SketchApp);
