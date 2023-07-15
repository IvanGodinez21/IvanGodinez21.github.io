<script lang="ts" setup>
import { IContactMethod } from 'types/contact';
import { IUser } from 'types/user';

const props = defineProps<{
  user: IUser;
}>();

const contactMethods: IContactMethod[] = [
  {
    icon: '/icons/facebook.svg',
    name: 'Facebook',
    url: `https://facebook.com/${props.user.social.facebook.username}`,
  },
  {
    icon: '/icons/github.svg',
    name: 'GitHub',
    url: props.user.social.github.html_url ?? `https://github.com/${props.user.social.github.username}`,
  },
  {
    icon: '/icons/linkedin.svg',
    name: 'LinkedIn',
    url: `https://linkedin.com/in/${props.user.social.linkedin.username}`,
  },
  {
    icon: '/icons/twitter.svg',
    name: 'Twitter',
    url: `https://twitter.com/${props.user.social.twitter.username}`,
  },
];
</script>
<template>
  <div class="bg-emerald text-gunmetal md:flex md:items-center md:justify-between p-2">
    <div class="flex max-md:justify-center max-md:text-center">
      <span class="text-sm font-medium sm:text-center">
        Made with ❤️{{ props.user.fullName ? ` by ${props.user.fullName}.` : '' }}
      </span>
    </div>
    <div class="flex max-md:justify-center">
      <template
        v-for="(contactMethod, index) in contactMethods.sort((a, b) => (a.name > b.name ? 1 : -1))"
        :key="index"
      >
        <a :href="contactMethod.url" target="_blank" rel="noopener" class="btn-footer-icon">
          <NuxtImg
            v-if="typeof contactMethod.icon === 'string'"
            :src="contactMethod.icon"
            :alt="contactMethod.name"
            class="w-5 h-5"
            :width="0"
            :height="0"
          />
        </a>
      </template>
    </div>
  </div>
</template>
