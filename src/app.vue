<script lang="ts" setup>
import moment from 'moment';
import TsparticlesTools from '@/classes/tsparticles_tools';
import { useStateStore } from '@/store/state';

const store = useStateStore();
const state = store.state;

store.setUser({ value: await getUser() });
store.setPartyMode({ value: moment().isSame(moment(state.user?.birthday), 'day') });

useHead({
  htmlAttrs: {
    lang: 'en',
  },
  title: `${state.user?.username}'s website`,
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: state.user?.social.github.avatar_url,
    },
  ],
});

onMounted(() => {
  if (state.isPartyMode) {
    TsparticlesTools.emit({ options: { position: { x: 0, y: 100 }, angle: 45 } });
    TsparticlesTools.emit({ options: { position: { x: 100, y: 100 }, angle: 135 } });
    document.addEventListener('pointerup', (e) => {
      if (e.target instanceof HTMLButtonElement) TsparticlesTools.emit({ eventTarget: e.target });
      if (e.target instanceof Element) {
        const button = e.composedPath().find((element) => element instanceof HTMLButtonElement);
        if (button) TsparticlesTools.emit({ eventTarget: button });
      }
    });
  }
});
</script>
<template>
  <NuxtLayout name="default" :user="state.user">
    <NuxtPage />
  </NuxtLayout>
</template>
