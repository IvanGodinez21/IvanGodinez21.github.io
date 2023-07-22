'use client';

import { MouseEvent, PointerEvent, useState } from 'react';
import TsparticlesTools from '@/classes/tsparticles_tools';

export default function HeartSpan() {
  const [isHover, setHover] = useState(false);

  function emitHearts({ e }: { e: PointerEvent<HTMLSpanElement> | MouseEvent<HTMLSpanElement> }) {
    TsparticlesTools.emit({ eventTarget: e.target, preset: 'hearts' });
    setHover(true);
  }
  return (
    <span
      className={'animate-heartbeat inline-block'}
      onClick={(e) => emitHearts({ e })}
      onPointerOver={(e) => emitHearts({ e })}
      onPointerOut={() => {
        setHover(false);
      }}
    >
      {isHover ? '🖤' : '❤️'}
    </span>
  );
}
