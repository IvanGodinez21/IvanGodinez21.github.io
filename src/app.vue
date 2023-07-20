<script lang="ts" setup>
import moment from 'moment';
import TsparticlesTools from '@/classes/tsparticles_tools';
import { IRepo } from '@/types/repos';

const user = await getUser();
useState('user', () => user);
useState<IRepo[]>('repos', () => []);
useState('reposPage', () => 1);
const isPartyMode = useState<boolean>('isPartyMode', () => {
  return moment().isSame(moment(user.birthday), 'day');
}).value;

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
  if (isPartyMode) {
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
