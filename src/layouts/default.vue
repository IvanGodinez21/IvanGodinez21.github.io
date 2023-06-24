<template>
  <div class="flex flex-col h-screen justify-between">
    <header>
      <LayoutsHeader class="sticky top-0 z-10" :person="person" />
    </header>
    <main class="p-5 bg-tea-green dark:bg-gunmetal">
      <NuxtPage :person="person" />
    </main>
    <footer>
      <LayoutsFooter :person="person" />
    </footer>
  </div>
</template>
<script lang="ts">
import { PropType } from 'vue';
import Person from '../typescript/classes/person';

export default {
  props: {
    person: {
      type: Object as PropType<Person>,
      required: false,
    },
  },
};
</script>
<style></style>
