<script lang="ts" setup>
import NuxtTools from '@/classes/nuxt_tools';
import { content as globalContent } from '@/contexts/scroll_ref';

const content = ref<HTMLDivElement>();

onMounted(() => {
  globalContent.value = content.value;
});
</script>
<template>
  <div class="flex h-full w-full flex-col space-y-2">
    <div
      class="flex flex-1 items-center justify-center rounded-lg bg-granny-smith-apple dark:bg-indigo-dye"
    >
      <FontsH1 class="font-bold first-letter:uppercase">
        {{ NuxtTools.pageName({ pathname: $route.path }) }}
      </FontsH1>
    </div>
    <div
      ref="content"
      class="flex flex-[9_9_0%] overflow-y-auto rounded-lg bg-granny-smith-apple dark:bg-indigo-dye"
    >
      <slot />
    </div>
  </div>
</template>
