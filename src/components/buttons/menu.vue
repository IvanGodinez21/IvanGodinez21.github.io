<script lang="ts" setup>
import { Bars3Icon } from '@heroicons/vue/24/solid';
import { HTMLAttributes } from 'vue';

const props = defineProps<{
  id: HTMLAttributes['aria-controls'];
  navHidden: boolean;
}>();

defineEmits(['update:navHidden']);
</script>
<template>
  <button
    :aria-controls="props.id"
    :aria-expanded="!navHidden"
    aria-label="Toggle main menu button"
    class="btn-navbar-icon"
    title="Toggle main menu"
    type="button"
    @click="() => $emit('update:navHidden', !navHidden)"
    @blur="
      (e) => {
        if (!e.relatedTarget) $emit('update:navHidden', true);
      }
    "
  >
    <Bars3Icon class="w-6 h-6" />
  </button>
</template>
