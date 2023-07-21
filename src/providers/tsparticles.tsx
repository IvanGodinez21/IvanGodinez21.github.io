'use client';

import { ReactNode, useEffect } from 'react';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import TsparticlesTools from '@/classes/tsparticles_tools';
import { RootState } from '@/types/store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default function TsparticlesProvider({ children }: { children: ReactNode }) {
  const state = useAppSelector((state) => state.state);
  useEffect(() => {
    if (state.isPartyMode) {
      TsparticlesTools.emit.confettiCanon({ options: { position: { x: 0, y: 100 }, angle: 45 } });
      TsparticlesTools.emit.confettiCanon({ options: { position: { x: 100, y: 100 }, angle: 135 } });
      document.addEventListener('pointerup', (e) => {
        if (e.target instanceof HTMLButtonElement) TsparticlesTools.emit.confettiCanon({ eventTarget: e.target });
        if (e.target instanceof Element) {
          const button = e.composedPath().find((element) => element instanceof HTMLButtonElement);
          if (button) TsparticlesTools.emit.confettiCanon({ eventTarget: button });
        }
      });
    }
  }, [state.isPartyMode]);
  return children;
}
