<script lang="ts" setup>
import { Bars3Icon } from '@heroicons/vue/24/solid';

const navHidden = useState('navHidden');
</script>
<script lang="ts">
export default {
  props: {
    id: {
      type: String,
      required: false,
      default: undefined,
    },
  },
};
</script>
<template>
  <button
    :aria-controls="id"
    :aria-expanded="!navHidden"
    aria-label="Toggle main menu button"
    className="btn-navbar-icon"
    :data-collapse-toggle="id"
    title="Toggle main menu"
    type="button"
    @click="() => (navHidden = !navHidden)"
  >
    <Bars3Icon class="w-6 h-6" />
  </button>
</template>
