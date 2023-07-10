'use client';

import H1 from '@/components/typography/h1';
import NextTools from '@/classes/next_tools';
import { content } from '@/contexts/scroll_ref';
import { usePathname } from 'next/navigation';

export default function Main({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <>
      <div className={'bg-granny-smith-apple dark:bg-indigo-dye rounded-lg flex flex-1 items-center justify-center'}>
        <H1 className={'font-bold first-letter:uppercase'}>{NextTools.pageName({ pathname })}</H1>
      </div>
      <div
        className={'bg-granny-smith-apple dark:bg-indigo-dye rounded-lg flex flex-[9_9_0%] overflow-y-auto'}
        ref={content}
      >
        {children}
      </div>
    </>
  );
}
