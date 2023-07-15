<script lang="ts">
import { ArrowTopRightOnSquareIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/vue/24/solid';
import { IUser } from '@/types/user';
export default {
  components: {
    ArrowTopRightOnSquareIcon,
    EnvelopeIcon,
    PhoneIcon,
  },
  data() {
    return {
      user: undefined as IUser | undefined,
    };
  },
  computed: {
    contactMethods() {
      return [
        {
          icon: '/icons/discord.svg',
          name: 'Discord',
          url: `https://discord.com/channels/${this.user?.social.discord.username}`,
        },
        { icon: EnvelopeIcon, name: 'Email', url: `mailto:${this.user?.email ?? this.user?.social.github.email}` },
        {
          icon: '/icons/facebook.svg',
          name: 'Facebook',
          url: `https://facebook.com/${this.user?.social.facebook.username}`,
        },
        {
          icon: '/icons/github.svg',
          name: 'GitHub',
          url: this.user?.social.github.html_url ?? `https://github.com/${this.user?.social.github.username}`,
        },
        {
          icon: '/icons/linkedin.svg',
          name: 'LinkedIn',
          url: `https://linkedin.com/in/${this.user?.social.linkedin.username}`,
        },
        { icon: '/icons/telegram.svg', name: 'Telegram', url: `https://t.me/${this.user?.social.telegram.username}` },
        { icon: PhoneIcon, name: 'Thelephone', url: `tel:${this.user?.telephone}` },
        {
          icon: '/icons/twitter.svg',
          name: 'Twitter',
          url: `https://twitter.com/${this.user?.social.twitter.username}`,
        },
        { icon: '/icons/whatsapp.svg', name: 'WhatsApp', url: `https://wa.me/${this.user?.social.whatsapp.telephone}` },
      ];
    },
  },
  async mounted() {
    this.user = (await useFetch('/api/user')).data.value as IUser;
  },
  methods: {
    sortedContactMethods() {
      return this.contactMethods.slice().sort((a, b) => (a.name > b.name ? 1 : -1));
    },
  },
};
</script>
<template>
  <div class="flex flex-1 max-md:h-max max-md:w-full w-3/6 m-2 items-center justify-center">
    <div class="p-6 bg-medium-spring-green dark:bg-prussian-blue rounded-lg shadow">
      <p class="font-normal">
        Contact me via the following methods. I will try to get back to you as soon as possible.
      </p>
      <ul class="my-4 grid md:grid-cols-2 gap-4">
        <li v-for="(contactMethod, index) in sortedContactMethods()" :key="index">
          <a :href="contactMethod.url" target="_blank" rel="noopener noreferrer" class="btn-contact">
            <template v-if="typeof contactMethod.icon === 'string'">
              <NuxtImg :src="contactMethod.icon" :alt="contactMethod.name" class="w-6 h-6" />
            </template>
            <template v-else>
              <component :is="contactMethod.icon" class="w-6 h-6" />
            </template>
            <span class="flex-1 ml-3 whitespace-nowrap">{{ contactMethod.name }}</span>
            <ArrowTopRightOnSquareIcon class="w-6 h-6" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
