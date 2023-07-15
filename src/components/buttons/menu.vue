<script lang="ts" setup>
import { HTMLAttributes } from 'vue';
import { Bars3Icon } from '@heroicons/vue/24/solid';

const props = defineProps<{
  id: HTMLAttributes['aria-controls'];
}>();

const navHidden = useState('navHidden');
</script>
<template>
  <button
    :aria-controls="props.id"
    :aria-expanded="!navHidden"
    aria-label="Toggle main menu button"
    class="btn-navbar-icon"
    title="Toggle main menu"
    type="button"
    @click="() => (navHidden = !navHidden)"
    @blur="
      (e) => {
        if (!e.relatedTarget) navHidden = true;
      }
    "
  >
    <Bars3Icon class="w-6 h-6" />
  </button>
</template>
