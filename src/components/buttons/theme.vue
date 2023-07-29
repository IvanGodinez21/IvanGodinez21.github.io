<script lang="ts" setup>
import { MoonIcon, SunIcon } from '@heroicons/vue/24/solid';

const showThemeIcon = ref(false);
const themeIcon = computed(() =>
  useColorMode().value === 'dark' ? MoonIcon : SunIcon,
);

onMounted(() => {
  showThemeIcon.value = true;
});
</script>
<template>
  <button
    v-if="showThemeIcon"
    aria-label="Toggle theme mode button"
    class="btn-navbar-icon"
    title="Toggle theme"
    type="button"
    @pointerup="
      (e) => {
        if (e.button !== 2)
          $colorMode.preference =
            $colorMode.value === 'dark' ? 'light' : 'dark';
      }
    "
    @contextmenu="
      (e) => {
        e.preventDefault();
        $colorMode.preference = 'system';
      }
    "
  >
    <component :is="themeIcon" class="h-6 w-6" />
  </button>
</template>
