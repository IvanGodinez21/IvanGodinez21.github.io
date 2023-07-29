'use client';

import H1 from '@/components/typography/h1';
import NextTools from '@/classes/next_tools';
import { content } from '@/contexts/scroll_ref';
import { usePathname } from 'next/navigation';

export default function Main({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <>
      <div
        className={
          'flex flex-1 items-center justify-center rounded-lg bg-granny-smith-apple dark:bg-indigo-dye'
        }
      >
        <H1 className={'font-bold first-letter:uppercase'}>
          {NextTools.pageName({ pathname })}
        </H1>
      </div>
      <div
        className={
          'flex flex-[9_9_0%] overflow-y-auto rounded-lg bg-granny-smith-apple dark:bg-indigo-dye'
        }
        ref={content}
      >
        {children}
      </div>
    </>
  );
}
