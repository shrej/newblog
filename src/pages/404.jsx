import React from 'react';
import Helmet from 'react-helmet';
import CenterWrap from '../components/center-wrap';
import Layout from '../components/layout';

export default () => (
  <Layout>
    <CenterWrap>
      <Helmet>
        <title>404 &middot; Shreyans Jain</title>
      </Helmet>
      <h2>404</h2>
      <p>Sorry, it looks like it is not a valid page</p>
    </CenterWrap>
  </Layout>
);
