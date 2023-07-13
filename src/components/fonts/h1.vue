<script lang="ts">
export default {
  props: {
    className: {
      type: String,
      default: '',
    },
  },
};
</script>
<template>
  <h1 :class="[className, 'text-2xl'].filter(Boolean).join(' ')">
    <slot />
  </h1>
</template>
