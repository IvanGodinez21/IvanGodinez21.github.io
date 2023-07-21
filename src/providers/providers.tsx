import { ReactNode } from 'react';
import Provider from '@/classes/provider';
import ReduxProvider from './redux';
import CustomThemeProvider from './theme';

const providers = [ReduxProvider, CustomThemeProvider];

export default function Providers({ children }: { children: ReactNode }) {
  return Provider.combine(providers, children);
}
