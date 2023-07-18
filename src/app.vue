<script lang="ts" setup>
import moment from 'moment';
import { IUser } from '@/types/user';
import TsparticlesTools from '@/classes/tsparticles_tools';

const user = (await useFetch('/api/user')).data.value as IUser;

const isPartyMode = useState<boolean>('isPartyMode', () => {
  return moment().isSame(moment(user.birthday), 'day');
});

useHead({
  htmlAttrs: {
    lang: 'en',
  },
  title: `${user.username}'s website`,
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: user.social.github.avatar_url,
    },
  ],
});

onMounted(() => {
  if (isPartyMode.value) {
    TsparticlesTools.emit.confettiCanon({ options: { position: { x: 0, y: 100 }, angle: 45 } });
    TsparticlesTools.emit.confettiCanon({ options: { position: { x: 100, y: 100 }, angle: 135 } });
    document.addEventListener('pointerup', (e) => {
      if (e.target instanceof HTMLButtonElement) TsparticlesTools.emit.confettiCanon({ eventTarget: e.target });
      if (e.target instanceof Element) {
        const button = e.composedPath().find((element) => element instanceof HTMLButtonElement);
        if (button) TsparticlesTools.emit.confettiCanon({ eventTarget: button });
      }
    });
  }
});
</script>
<template>
  <NuxtLayout name="default" :user="user">
    <NuxtPage />
  </NuxtLayout>
</template>
