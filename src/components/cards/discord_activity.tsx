'use client';

import { Activities, LanyardSocketEvents } from '@/constants/lanyard';
import { ILanyardReponse } from '@/types/lanyard';
import { IUser, IUserConstructor } from '@/types/user';
import { useEffect, useState } from 'react';
import Lanyard from '@/classes/lanyard';

export default function DiscordActivity({ user }: { user: IUser }) {
  const [discord, setDiscord] = useState<IUserConstructor['social']['discord']>();
  const mainActivity = discord?.activities?.findLast((activity) => activity.type != Activities.Custom);

  useEffect(() => {
    async function loadUser() {
      if (!user.social.discord.id ?? !user?.social?.discord?.discord_user?.id) return;
      const lanyard = new Lanyard({
        userId: user.social.discord.id ?? user?.social?.discord?.discord_user?.id,
      });
      function handler(data: ILanyardReponse) {
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
    <>
      {mainActivity && (
        <div
          className={
            'bg-medium-spring-green dark:bg-prussian-blue p-3 rounded-lg flex flex-col justify-center items-center'
          }
        >
          <p>
            {Activities[mainActivity?.type]} {mainActivity?.name}
          </p>
        </div>
      )}
    </>
  );
}
