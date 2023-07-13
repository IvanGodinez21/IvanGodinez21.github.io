<script lang="ts" setup>
import NuxtTools from '@/classes/nuxt_tools';
</script>

<template>
  <div class="flex flex-col w-full h-full space-y-2">
    <div class="bg-granny-smith-apple dark:bg-indigo-dye rounded-lg flex flex-1 items-center justify-center">
      <FontsH1 class="font-bold first-letter:uppercase">
        {{ NuxtTools.pageName({ pathname: $route.path }) }}
      </FontsH1>
    </div>
    <div class="bg-granny-smith-apple dark:bg-indigo-dye rounded-lg flex flex-[9_9_0%] overflow-y-auto">
      <slot />
    </div>
  </div>
</template>
