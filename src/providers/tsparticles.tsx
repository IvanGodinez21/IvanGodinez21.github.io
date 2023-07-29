'use client';

import { ReactNode, useEffect } from 'react';
import TsparticlesTools from '@/classes/tsparticles_tools';
import { useAppSelector } from '@/store/index';

export default function TsparticlesProvider({
  children,
}: {
  children: ReactNode;
}) {
  const state = useAppSelector((store) => store.state);

  useEffect(() => {
    function throwConfetti(event: PointerEvent) {
      if (!state.isPartyMode) return;
      if (event.target instanceof HTMLButtonElement)
        TsparticlesTools.emit({ eventTarget: event.target });
      if (event.target instanceof Element) {
        const button = event
          .composedPath()
          .find((element) => element instanceof HTMLButtonElement);
        if (button) TsparticlesTools.emit({ eventTarget: button });
      }
    }
    if (state.isPartyMode) {
      TsparticlesTools.emit({
        options: { position: { x: 0, y: 100 }, angle: 45 },
      });
      TsparticlesTools.emit({
        options: { position: { x: 100, y: 100 }, angle: 135 },
      });
    }
    document.addEventListener('pointerup', throwConfetti);
    return () => {
      document.removeEventListener('pointerup', throwConfetti);
    };
  }, [state.isPartyMode]);
  return children;
}
