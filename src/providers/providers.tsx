import { ReactNode } from 'react';
import Provider from '@/classes/provider';
import ReduxProvider from './redux';
import CustomThemeProvider from './theme';
import TsparticlesProvider from './tsparticles';

const providers = [ReduxProvider, CustomThemeProvider, TsparticlesProvider];

export default function Providers({ children }: { children: ReactNode }) {
  return Provider.combine(providers, children);
}
