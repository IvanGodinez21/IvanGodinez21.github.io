<script lang="ts" setup>
import { PropType } from 'vue';
import { IUser } from '@/types/user';
import { routes } from '@/constants/routes';

const navHidden = useState<boolean>('navHidden', () => true);
</script>

<script lang="ts">
export default {
  props: {
    user: {
      type: Object as PropType<IUser>,
      required: true,
    },
  },
};
</script>
<template>
  <div class="p-2 shadow bg-emerald text-gunmetal">
    <div class="flex flex-wrap justify-between mx-2">
      <div class="flex max-lg:order-1 max-sm:order-2">
        <NuxtLink
          aria-label="Redirect to start page"
          title="Start page"
          class="flex items-center btn-navbar-icon"
          to="/"
        >
          <span v-if="user.username ?? user.fullName" class="self-center text-xl font-semibold whitespace-nowrap">
            {{ user.username ? `@${user.username}` : user.fullName }}
          </span>
        </NuxtLink>
      </div>
      <div class="flex md:hidden max-md:order-3">
        <ButtonsMenu id="header-nav" />
      </div>
      <div
        :class="`lg:order-2 md:order-4 max-md:order-4 max-sm:order-4 max-md:mt-2 justify-between items-center align-middle w-full md:flex lg:flex md:w-auto lg:w-auto ${
          navHidden ? 'hidden' : ''
        }`"
      >
        <ListsMenu id="header-nav" :routes="routes" />
      </div>
      <div class="flex lg:order-3 md:order-4 max-sm:order-1">
        <ButtonsTheme />
      </div>
    </div>
  </div>
</template>
