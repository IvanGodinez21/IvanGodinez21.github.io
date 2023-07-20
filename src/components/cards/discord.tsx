'use client';

import Image from 'next/image';
import { Activities, LanyardSocketEvents } from '@/constants/lanyard';
import { ILanyardResponse } from '@/types/lanyard';
import { IUser, IUserConstructor } from '@/types/user';
import { useEffect, useState } from 'react';
import Lanyard from '@/classes/lanyard';

export default function DiscordCard({ user }: { user: IUser }) {
  const [discord, setDiscord] = useState<IUserConstructor['social']['discord']>();
  const mainActivity = discord?.activities?.findLast((activity) => activity.type != Activities.Custom);

  useEffect(() => {
    async function loadUser() {
      if (!user.social.discord.id ?? !user?.social?.discord?.discord_user?.id) return;
      const lanyard = new Lanyard({
        userId: user.social.discord.id ?? user?.social?.discord?.discord_user?.id,
      });
      function handler(data: ILanyardResponse) {
        setDiscord(data);
      }
      lanyard.connect();
      lanyard.on(LanyardSocketEvents.initState, handler);
      lanyard.on(LanyardSocketEvents.presenceUpdate, handler);
      return () => {
        lanyard.off(LanyardSocketEvents.initState, handler);
        lanyard.off(LanyardSocketEvents.presenceUpdate, handler);
        lanyard.disconnect();
      };
    }
    loadUser();
  }, [user]);

  return (
    <div>
      <div className={'bg-medium-spring-green dark:bg-prussian-blue rounded-lg'}>
        <main className={'px-5 py-4'}>
          <div className={'grid grid-cols-6'}>
            <div>
              <Image
                src={discord?.discord_user?.id ? `https://api.lanyard.rest/${discord.discord_user.id}.webp` : ''}
                alt={discord?.discord_user?.username ? `${discord?.discord_user?.username} avatar` : 'avatar'}
                priority
                className={'block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0'}
                width={96}
                height={0}
              />
            </div>
            <div className={'col-span-3 px-3 font-semibold flex flex-col'}>
              <div>{discord?.discord_user?.display_name}</div>
              <div className={'text-sm text-gray-400 font-light'}>{discord?.discord_user?.username}</div>
              <div className={'text-sm text-gray-400 font-light'}>{discord?.discord_status}</div>
            </div>
          </div>
        </main>
        {mainActivity && (
          <footer className={'px-5 py-4 text-blue-600'}>
            {Activities[mainActivity?.type]} {mainActivity?.name}
          </footer>
        )}
      </div>
      <div className={'p-4 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-y-0 space-x-6'}>
        <Image
          src={discord?.discord_user?.id ? `https://api.lanyard.rest/${discord.discord_user.id}.webp` : ''}
          alt={discord?.discord_user?.username ? `${discord?.discord_user?.username} avatar` : 'avatar'}
          priority
          className={'block mx-auto h-24 rounded-full shrink-0'}
          width={96}
          height={0}
        />
        <div className={'space-y-2 text-left'}>
          <div className={'space-y-0.5'}>
            <p className={'text-lg text-black font-semibold'}>{discord?.discord_user?.display_name}</p>
            <p className={'text-slate-500 font-medium'}>{discord?.discord_user?.username}</p>
          </div>
          {mainActivity && (
            <p className={'py-1 text-sm text-purple-600'}>
              {Activities[mainActivity?.type]} {mainActivity?.name}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
