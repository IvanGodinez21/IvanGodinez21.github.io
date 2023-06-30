'use client';

import { ILanyardReponse } from '@/types/lanyard';
import { lanyard } from '@/clients/lanyard';
import { Activities, LanyardSocketEvents } from '@/constants/lanyard';
import { useEffect, useState } from 'react';
import { useFetchUser } from '@/hooks/useFetchUser';
import { IUser } from '@/types/user';
import Image from 'next/image';

export default function AboutPage() {
  const [discord, setDiscord] = useState<IUser['social']['discord']>();
  const { user } = useFetchUser();
  const mainActivity = discord?.activities?.find((activity) => activity.type === 0 || activity.type === 2);

  useEffect(() => {
    function handler(data: ILanyardReponse) {
      setDiscord(data);
      console.log(data);
    }

    if (lanyard) {
      lanyard.on(LanyardSocketEvents.initState, handler);
      lanyard.on(LanyardSocketEvents.presenceUpdate, handler);
    } else {
      setDiscord(user?.social.discord);
    }

    return () => {
      if (lanyard) {
        lanyard.off(LanyardSocketEvents.initState, handler);
        lanyard.off(LanyardSocketEvents.presenceUpdate, handler);
      }
    };
  }, [user]);

  return (
    <div>
      <div className={'bg-medium-spring-green dark:bg-prussian-blue rounded-lg'}>
        <main className='px-5 py-4'>
          <div className='grid grid-cols-6'>
            <div className=''>
              <Image
                src={`https://api.lanyard.rest/${discord?.discord_user?.id}.webp`}
                alt={discord?.discord_user?.username ? `${discord?.discord_user?.username} avatar` : 'avatar'}
                priority
                className='block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0'
                width={96}
                height={0}
              />
            </div>
            <div className='col-span-3 px-3 font-semibold flex flex-col'>
              <div className=''>{discord?.discord_user?.display_name}</div>
              <div className='text-sm text-gray-400 font-light'>{discord?.discord_user?.username}</div>
              <div className='text-sm text-gray-400 font-light'>{discord?.discord_status}</div>
            </div>
          </div>
        </main>
        {mainActivity && (
          <footer className='px-5 py-4 text-blue-600'>
            {Activities[mainActivity?.type]} {mainActivity?.name}
          </footer>
        )}
      </div>
      <div className='py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6'>
        <Image
          src={`https://api.lanyard.rest/${discord?.discord_user?.id}.webp`}
          alt={discord?.discord_user?.username ? `${discord?.discord_user?.username} avatar` : 'avatar'}
          priority
          className='block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0'
          width={96}
          height={0}
        />
        <div className='text-center space-y-2 sm:text-left'>
          <div className='space-y-0.5'>
            <p className='text-lg text-black font-semibold'>{discord?.discord_user?.display_name}</p>
            <p className='text-slate-500 font-medium'>{discord?.discord_user?.username}</p>
          </div>
          {mainActivity && (
            <p className='py-1 text-sm text-purple-600'>
              {Activities[mainActivity?.type]} {mainActivity?.name}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
