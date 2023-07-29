<script lang="ts" setup>
import {
  ArrowTopRightOnSquareIcon,
  EnvelopeIcon,
  PhoneIcon,
} from '@heroicons/vue/24/solid';
import { IContactMethod } from '@/types/contact';
import { useStateStore } from '@/store/state';

const store = useStateStore();
const state = store.state;

const contactMethods: IContactMethod[] = [
  {
    icon: '/icons/discord.svg',
    name: 'Discord',
    url: `https://discord.com/channels/${state.user?.social.discord.username}`,
  },
  {
    icon: EnvelopeIcon,
    name: 'Email',
    url: `mailto:${state.user?.email ?? state.user?.social.github.email}`,
  },
  {
    icon: '/icons/facebook.svg',
    name: 'Facebook',
    url: `https://facebook.com/${state.user?.social.facebook.username}`,
  },
  {
    icon: '/icons/github.svg',
    name: 'GitHub',
    url:
      state.user?.social.github.html_url ??
      `https://github.com/${state.user?.social.github.username}`,
  },
  {
    icon: '/icons/linkedin.svg',
    name: 'LinkedIn',
    url: `https://linkedin.com/in/${state.user?.social.linkedin.username}`,
  },
  {
    icon: '/icons/telegram.svg',
    name: 'Telegram',
    url: `https://t.me/${state.user?.social.telegram.username}`,
  },
  { icon: PhoneIcon, name: 'Telephone', url: `tel:${state.user?.telephone}` },
  {
    icon: '/icons/twitter.svg',
    name: 'Twitter',
    url: `https://twitter.com/${state.user?.social.twitter.username}`,
  },
  {
    icon: '/icons/whatsapp.svg',
    name: 'WhatsApp',
    url: `https://wa.me/${state.user?.social.whatsapp.telephone}`,
  },
];
</script>
<template>
  <div
    class="m-2 flex w-3/6 flex-1 items-center justify-center max-md:h-max max-md:w-full"
  >
    <div
      class="rounded-lg bg-medium-spring-green p-6 shadow dark:bg-prussian-blue"
    >
      <p class="font-normal">
        Contact me via the following methods. I will try to get back to you as
        soon as possible.
      </p>
      <ul class="my-4 grid gap-4 md:grid-cols-2">
        <li
          v-for="(contactMethod, index) in contactMethods.sort((a, b) =>
            a.name > b.name ? 1 : -1,
          )"
          :key="index"
        >
          <a
            :href="contactMethod.url"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-contact"
          >
            <template v-if="typeof contactMethod.icon === 'string'">
              <NuxtImg
                :src="contactMethod.icon"
                :alt="contactMethod.name"
                class="h-6 w-6"
                :width="0"
                :height="0"
              />
            </template>
            <template v-else>
              <component :is="contactMethod.icon" class="h-6 w-6" />
            </template>
            <span class="ml-3 flex-1 whitespace-nowrap">{{
              contactMethod.name
            }}</span>
            <ArrowTopRightOnSquareIcon class="h-6 w-6" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
