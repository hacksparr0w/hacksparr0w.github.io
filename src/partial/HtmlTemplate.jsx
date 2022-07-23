import { Global } from "@emotion/react";
import React from "react";

import { alienInvaderIcon } from "../asset/tweemoji";

const globalStyles = {
  "*": {
    margin: 0,
    padding: 0
  }
};

export const containerSelector = "#app";

export default ({ metadata, children }) => {
  const {
    build: { clientBundleFileUrl },
    page: { moduleFilePath, title }
  } = metadata;

  const blogPost = moduleFilePath.includes("post");
  const googleAnalyticsId = process.env.GOOGLE_ANALYTICS_ID;

  let katexStylesheet;

  if (!blogPost) {
    katexStylesheet = null;
  } else {
    katexStylesheet = (
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css"
        integrity="sha384-Xi8rHCmBmhbuyyhbI88391ZKP2dmfnOl4rT9ZfRI7mLTdk1wblIUnrIq35nqwEvC"
        crossOrigin="anonymous"
      />
    );
  }

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <link rel="icon" type="image/svg+xml" href={alienInvaderIcon} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;500;600&family=Roboto+Mono&display=swap"
          rel="stylesheet"
        />
        {katexStylesheet}
        <title>{title}</title>
      </head>
      <body>
        <Global styles={globalStyles} />
        <div id="app">
          {children}
        </div>
      </body>
      <script src={clientBundleFileUrl} />
      <script
        async
        src={(
          `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`
        )}
      />
      <script dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag() { dataLayer.push(arguments); };
          gtag("js", new Date());
          gtag("config", "${googleAnalyticsId}");
        `
      }} />
    </html>
  );
};
