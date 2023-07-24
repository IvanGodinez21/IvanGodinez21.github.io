import Lanyard from '@/classes/lanyard';
import { store } from '@/store/index';

export let lanyard: Lanyard | undefined;
(async () => {
  const state = store.getState().state;
  if (state.user?.social?.discord?.id) {
    lanyard = new Lanyard({
      userId: state.user.social.discord.id,
      socketMode: true,
    });
  }
})();
