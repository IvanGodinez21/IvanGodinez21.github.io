import Lanyard from '@/classes/lanyard';

export let lanyard: Lanyard | undefined;
if (process.env.NEXT_PUBLIC_DISCORD_ID) {
  lanyard = new Lanyard({
    userId: process.env.NEXT_PUBLIC_DISCORD_ID,
    socketMode: true,
  });
}
