<script lang="ts" setup>
import { IUser } from 'types/user';

const { data } = await useFetch('/api/user');
const user = data.value as IUser;

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
<script lang="ts">
export default {
  layout: 'default',
};
</script>
<template>
  <NuxtLayout />
</template>
