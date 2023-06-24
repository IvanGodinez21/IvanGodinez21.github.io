import User from '@/classes/user';
import { AppProps } from 'next/app';
import { NextFont } from 'next/dist/compiled/@next/font';
import { NextPage } from 'next';
import { ReactNode } from 'react';

export type INextPageWithLayout<P = { className?: HTMLDivElement['className'] }, IP = P> = NextPage<P, IP> & {
  getLayout?: ({
    Component,
    font,
    pageProps,
  }: {
    Component: IAppPropsWithLayout['Component'];
    font: NextFont;
    pageProps: IAppPropsWithLayout['pageProps'];
  }) => ReactNode;
};

export type IAppPropsWithLayout = AppProps & {
  Component: INextPageWithLayout;
};

export interface IAppState {
  user: User;
}
