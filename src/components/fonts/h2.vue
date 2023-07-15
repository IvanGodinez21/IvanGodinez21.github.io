<script lang="ts" setup>
import { HTMLAttributes } from 'vue';

const props = defineProps<{
  class?: HTMLAttributes['class'];
}>();
</script>
<template>
  <h2 :class="[props.class, 'text-xl'].filter(Boolean).join(' ')">
    <slot />
  </h2>
</template>
