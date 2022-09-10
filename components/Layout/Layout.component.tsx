import React from 'react';
import { PropsWithChildren } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import { useRouter } from 'next/router';

declare var LocomotiveScroll: any;

export function Layout({
  children,
}: PropsWithChildren<Record<string, unknown>>): JSX.Element {
  const router = useRouter();
  if (router.pathname === '/high_point_park') {
    return <main>{children}</main>;
  } else if (router.pathname === '/hq') {
    return <main>{children}</main>;
  } else {
    return (
      <main>
        <Header />
        {children}
        <Footer />
      </main>
    );
  }
}
