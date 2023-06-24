<template>
  <div
    class="rounded-lg py-5 px-20 bg-granny-smith-apple dark:bg-indigo-dye container-xl"
  >
    <div class="grid justify-center">
      <TitlesPage />
    </div>
    <div class="py-5 space-y-5">
      <div class="grid grid-cols-12">
        <div class="col-span-2">
          <img
            class="rounded"
            src="https://avatars.githubusercontent.com/u/45635827?v=4"
            alt="Picture of IvanGodinez21"
          />
        </div>
      </div>
    </div>
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
