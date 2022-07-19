import { Global } from "@emotion/react";
import React from "react";

import { globalStyles } from "../styles";
import { alienInvaderIcon } from "../asset/tweemoji";

export const containerSelector = "#app";

export default ({ metadata, children }) => {
  const {
    build: { clientBundleFileUrl },
    page: { title }
  } = metadata;

  const googleAnalyticsId = process.env.GOOGLE_ANALYTICS_ID;

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
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&family=Roboto+Mono&display=swap"
          rel="stylesheet"
        />
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
