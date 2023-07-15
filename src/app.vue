<script lang="ts" setup>
import { IUser } from 'types/user';

const user = (await useFetch('/api/user')).data.value as IUser;

useHead({
  title: `${user.username}'s website`,
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: user.social.github.avatar_url,
    },
  ],
});
</script>
<template>
  <NuxtLayout name="default" :user="user">
    <NuxtPage />
  </NuxtLayout>
</template>
