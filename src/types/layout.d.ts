import { AppProps } from 'next/app';
import { FC } from 'react';
import { IAppPropsWithLayout } from './app';
import { NextFont } from 'next/dist/compiled/@next/font';

export type ILayout = FC<{
  Component: IAppPropsWithLayout['Component'];
  pageProps: AppProps['pageProps'];
  font: NextFont;
}>;
