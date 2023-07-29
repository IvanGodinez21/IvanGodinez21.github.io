'use client';

import { PointerEvent, useState } from 'react';
import TsparticlesTools from '@/classes/tsparticles_tools';

export default function HeartSpan() {
  const [isHover, setHover] = useState(false);

  function emitHearts({ e }: { e: PointerEvent }) {
    TsparticlesTools.emit({ eventTarget: e.target, preset: 'hearts' });
    setHover(true);
  }
  return (
    <span
      className={'inline-block animate-heartbeat'}
      onPointerUp={(e) => emitHearts({ e })}
      onPointerOver={(e) => emitHearts({ e })}
      onPointerOut={() => {
        setHover(false);
      }}
    >
      {isHover ? '🖤' : '❤️'}
    </span>
  );
}
