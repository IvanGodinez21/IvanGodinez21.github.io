<template>
  <div
    class="grid grid-cols-1 lg:m-10 lg:py-12 max-lg:pt-6 space-y-4 rounded items-center justify-center"
  >
    <div class="grid items-center justify-center">
      <h1
        class="text-2xl text-light-wine dark:text-dark-cherry-blossom-pink font-semibold"
      >
        Contact
      </h1>
    </div>
    <div
      class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center justify-center"
    >
      <div class="flex flex-col items-center">
        <div
          class="p-4 w-full max-w-md bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700"
        >
          <div class="flex justify-between items-center mb-4">
            <h5
              class="text-xl font-bold leading-none text-gray-900 dark:text-white"
            >
              Social media
            </h5>
          </div>
          <div class="flow-root">
            <ul
              role="list"
              class="divide-y divide-gray-200 dark:divide-gray-700"
            >
              <li class="py-3 sm:py-4">
                <ContactRow medium="Email" username="ivano.godinez@gmail.com" />
              </li>
              <li class="py-3 sm:py-4">
                <ContactRow medium="Facebook" username="IvanGodinez21" />
              </li>
              <li class="py-3 sm:py-4">
                <ContactRow medium="LinkedIn" username="IvanGodinez21" />
              </li>
              <li class="py-3 sm:py-4">
                <ContactRow medium="GitHub" username="IvanGodinez21" />
              </li>
              <li class="py-3 sm:py-4">
                <ContactRow medium="Twitter" username="IvanGodinez21" />
              </li>
            </ul>
          </div>
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
