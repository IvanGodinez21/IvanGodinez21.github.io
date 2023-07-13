<script lang="ts" setup>
import { IUser } from 'types/user';

const { data } = await useFetch('/api/user');
const user = data.value as IUser;
</script>
<template>
  <div>
    <div class="flex flex-col h-screen w-screen">
      <header class="sticky w-full">
        <LayoutsHeader :user="user" />
      </header>
      <main class="flex flex-col flex-1 m-4 overflow-y-hidden">
        <LayoutsMain>
          <NuxtPage />
        </LayoutsMain>
      </main>
      <footer class="sticky w-full">
        <LayoutsFooter :user="user" />
      </footer>
    </div>
  </div>
</template>
