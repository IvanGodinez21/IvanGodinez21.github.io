<script lang="ts">
import { MoonIcon, SunIcon } from '@heroicons/vue/24/solid';

export default {
  data() {
    return {
      showThemeIcon: false,
    };
  },
  computed: {
    themeIcon() {
      return this.$colorMode.value === 'dark' ? MoonIcon : SunIcon;
    },
  },
  mounted() {
    this.showThemeIcon = true;
  },
};
</script>
<template>
  <button
    v-if="showThemeIcon"
    aria-label="Toggle theme mode button"
    className="btn-navbar-icon"
    title="Toggle theme"
    type="button"
    @click="() => ($colorMode.preference = $colorMode.value === 'dark' ? 'light' : 'dark')"
    @contextmenu="
      (e) => {
        e.preventDefault();
        $colorMode.preference = 'system';
      }
    "
  >
    <component :is="themeIcon" class="w-6 h-6" />
  </button>
</template>
