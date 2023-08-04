import { createElement, FC, ReactNode } from 'react';

export default abstract class Provider {
  static combine = (
    providers: FC<{ children: ReactNode }>[],
    children: ReactNode,
  ): ReactNode => {
    return providers.reduceRight((providersAccumulator, provider) => {
      return createElement(provider, null, providersAccumulator);
    }, children);
  };
}
