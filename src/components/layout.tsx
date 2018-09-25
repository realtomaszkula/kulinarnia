import { ThemeProvider } from 'emotion-theming';
import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import { theme } from '../utils/theme';
import Header from './header';
import './layout.css';

const Layout: React.StatelessComponent = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <ThemeProvider theme={theme}>
          <>
            <Header />
            {children}
          </>
        </ThemeProvider>
      </>
    )}
  />
);

export default Layout;
