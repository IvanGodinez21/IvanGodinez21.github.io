import { ReactNode } from 'react';
import Provider from '@/classes/provider';
import CustomThemeProvider from './theme';

const providers = [CustomThemeProvider];

export default function Providers({ children }: { children: ReactNode }) {
  return Provider.combine(providers, children);
}
