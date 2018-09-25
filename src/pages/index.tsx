import React from 'react';

import Layout from '../components/layout';
import { css } from 'emotion';

class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className={css`
            min-height: 300vh;
          `}
        >
          Hello
        </div>
      </Layout>
    );
  }
}

export default IndexPage;
