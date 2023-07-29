<script lang="ts" setup>
import { IUser } from '@/types/user';

const props = defineProps<{
  user?: IUser;
}>();
</script>
<template>
  <div>
    <div class="flex h-screen w-screen flex-col">
      <header class="sticky w-full">
        <LayoutsHeader :user="props.user" />
      </header>
      <main class="m-4 flex flex-1 flex-col overflow-y-hidden">
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
