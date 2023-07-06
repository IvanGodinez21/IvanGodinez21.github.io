import Lanyard from '@/classes/lanyard';
import { getUser } from '@/utils/getUser';

export let lanyard: Lanyard | undefined;
(async () => {
  const user = await getUser();
  if (user.social?.discord?.id) {
    lanyard = new Lanyard({
      userId: user.social.discord.id,
      socketMode: true,
    });
  }
})();
