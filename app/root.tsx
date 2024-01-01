import type { LinksFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';

import inter from '~/assets/fonts/inter-latin-wght-normal.woff2';
import fontStyles from '~/styles/fonts.styles.css';
import globalStyles from '~/styles/globals.styles.css';

export const links: LinksFunction = () => [
  {
    rel: 'preload',
    href: inter,
    as: 'font',
    type: 'font/woff2',
    crossOrigin: 'anonymous',
  },
  { rel: 'preload', href: fontStyles, as: 'style' },
  { rel: 'preload', href: globalStyles, as: 'style' },
  { rel: 'stylesheet', href: fontStyles },
  { rel: 'stylesheet', href: globalStyles },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Meta />
        <Links />
      </head>
      <body className="flex min-h-screen flex-col antialiased">
        <main className="flex flex-grow flex-col">
          <Outlet />
        </main>

        {/* <footer>Hello World</footer> */}

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
