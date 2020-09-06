/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemeProvider from '@theme/ThemeProvider';
import UserPreferencesProvider from '@theme/UserPreferencesProvider';
import AnnouncementBar from '@theme/AnnouncementBar';
import Navbar from '@theme/Navbar';
import Footer from '@theme/Footer';

import { useLocation } from 'react-router-dom';

import './styles.css';

function Providers({ children }) {
  return (
    <ThemeProvider>
      <UserPreferencesProvider>{children}</UserPreferencesProvider>
    </ThemeProvider>
  );
}

const STEAMSPEAK_HOST = 'https://steamspeak.netlify.app/';

function Layout(props) {
  const { siteConfig = {} } = useDocusaurusContext();
  const {
    favicon,
    title: siteTitle,
    themeConfig: { image: defaultImage },
    url: siteUrl
  } = siteConfig;
  const {
    children,
    title,
    noFooter,
    description,
    image,
    keywords,
    version,
    permalink
  } = props;
  const metaTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const metaImage = image || defaultImage;
  const metaImageUrl = siteUrl + useBaseUrl(metaImage);
  const faviconUrl = useBaseUrl(favicon);
  const location = useLocation();
  const canonURL = location
    ? STEAMSPEAK_HOST +
      (location.pathname.endsWith('/')
        ? location.pathname
        : `${location.pathname}/`)
    : null;

  return (
    <Providers>
      <Head>
        {/* TODO: Do not assume that it is in english language */}
        <html lang="en" />

        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        {metaTitle && <title>{metaTitle}</title>}
        {metaTitle && <meta property="og:title" content={metaTitle} />}
        {favicon && <link rel="shortcut icon" href={faviconUrl} />}
        {description && <meta name="description" content={description} />}
        {description && (
          <meta property="og:description" content={description} />
        )}
        {version && <meta name="docsearch:version" content={version} />}
        {keywords && keywords.length && (
          <meta name="keywords" content={keywords.join(',')} />
        )}
        {metaImage && <meta property="og:image" content={metaImageUrl} />}
        {metaImage && <meta property="twitter:image" content={metaImageUrl} />}
        {metaImage && (
          <meta name="twitter:image:alt" content={`Image for ${metaTitle}`} />
        )}
        {metaImage && <meta name="twitter:site" content="@dalexhdyt" />}
        {metaImage && <meta name="twitter:creator" content="@dalexhdyt" />}
        {canonURL && <meta property="og:url" content={canonURL} />}
        <meta name="twitter:card" content="summary" />
        {canonURL && <link rel="canonical" href={canonURL} />}
      </Head>
      <AnnouncementBar />
      <Navbar />
      <div className="main-wrapper">{children}</div>
      {!noFooter && <Footer />}
    </Providers>
  );
}

export default Layout;
