<template>
  <div class="flex flex-col md:flex-row justify-center flex-wrap gap-3 mt-10">
    <div>
      <div
        class="bg-white max-w-xs shadow-lg mx-auto border-b-4 border-emerald rounded-2xl overflow-hidden hover:shadow-2xl transition duration-500 transform hover:scale-105"
      >
        <div class="bg-emerald flex h-20 items-center">
          <p class="ml-4 text-white">{{ title }}</p>
        </div>
        <p class="py-6 px-6 text-lg tracking-wide text-center">
          {{ description }}
        </p>
        <div class="flex justify-center px-5 mb-2 text-sm">
          <button
            type="button"
            class="border border-emerald text-emerald rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-emerald focus:outline-none focus:shadow-outline"
          >
            Go to
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
};
</script>
<style></style>
