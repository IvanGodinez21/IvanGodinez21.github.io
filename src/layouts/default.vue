<script lang="ts" setup>
import { IUser } from '@/types/user';

const props = defineProps<{
  user: IUser;
}>();
</script>
<template>
  <div>
    <div class="flex flex-col h-screen w-screen">
      <header class="sticky w-full">
        <LayoutsHeader :user="props.user" />
      </header>
      <main class="flex flex-col flex-1 m-4 overflow-y-hidden">
        <LayoutsMain>
          <slot />
        </LayoutsMain>
      </main>
      <footer class="sticky w-full">
        <LayoutsFooter :user="props.user" />
      </footer>
    </div>
  </div>
</template>
