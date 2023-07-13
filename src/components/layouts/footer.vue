<script lang="ts">
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  computed: {
    contactMethods() {
      return [
        {
          icon: '/icons/facebook.svg',
          name: 'Facebook',
          url: `https://facebook.com/${this.user.social.facebook.username}`,
        },
        {
          icon: '/icons/github.svg',
          name: 'GitHub',
          url: this.user.social.github.html_url ?? `https://github.com/${this.user.social.github.username}`,
        },
        {
          icon: '/icons/linkedin.svg',
          name: 'LinkedIn',
          url: `https://linkedin.com/in/${this.user.social.linkedin.username}`,
        },
        {
          icon: '/icons/twitter.svg',
          name: 'Twitter',
          url: `https://twitter.com/${this.user.social.twitter.username}`,
        },
      ];
    },
  },
  methods: {
    sortedContactMethods() {
      return this.contactMethods.slice().sort((a, b) => (a.name > b.name ? 1 : -1));
    },
  },
};
</script>
<template>
  <div class="bg-emerald text-gunmetal md:flex md:items-center md:justify-between p-2">
    <div class="flex max-md:justify-center max-md:text-center">
      <span class="text-sm font-medium sm:text-center">
        Made with ❤️{{ user.fullName ? ` by ${user.fullName}.` : '' }}
      </span>
    </div>
    <div class="flex max-md:justify-center">
      <template v-for="(contactMethod, index) in sortedContactMethods()" :key="index">
        <a :href="contactMethod.url" target="_blank" rel="noopener" class="btn-footer-icon">
          <NuxtImg
            v-if="typeof contactMethod.icon === 'string'"
            :src="contactMethod.icon"
            :alt="contactMethod.name"
            class="w-5 h-5"
          />
        </a>
      </template>
    </div>
  </div>
</template>
