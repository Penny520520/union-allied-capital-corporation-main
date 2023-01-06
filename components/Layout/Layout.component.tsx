import React from 'react';
import { PropsWithChildren } from 'react';
import Head from 'next/head';
import { Footer } from './Footer';
import { Header } from './Header';
import { useRouter } from 'next/router';

export function Layout({
  children,
}: PropsWithChildren<Record<string, unknown>>): JSX.Element {
  const router = useRouter();
  if (router.pathname === '/high_point_park') {
    return (
      <>
        <Head>
          <link rel="shortcut icon" href="/UA-logo.jpg" />
        </Head>
        <main>{children}</main>
      </>
    );
  } else if (router.pathname === '/hq') {
    return (
      <>
        <Head>
          <link rel="test shortcut icon" href="/HQ-web-icon.jpg" />
        </Head>
        <main>{children}</main>
      </>
    );
  } else {
    return (
      <>
        <Head>
          <link rel="shortcut icon" href="/UA-logo.jpg" />
        </Head>
        <main>
          <Header />
          {children}
          <Footer />
        </main>
      </>
    );
  }
}
