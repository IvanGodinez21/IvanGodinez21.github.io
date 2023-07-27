<script lang="ts" setup>
import { routes } from '@/constants/routes';
import { IUser } from '@/types/user';

const props = defineProps<{
  user?: IUser;
}>();

const navHidden = ref(true);
</script>
<template>
  <div class="p-2 shadow bg-emerald text-gunmetal">
    <div class="flex flex-wrap justify-between mx-2">
      <div class="flex max-lg:order-1 max-sm:order-2">
        <button
          aria-label="Redirect to start page"
          title="Start page"
          class="flex items-center btn-navbar-icon"
          type="button"
          @pointerup="
            () => {
              $router.push({ path: '/' });
              navHidden = true;
            }
          "
        >
          <span
            v-if="props.user?.username ?? props.user?.fullName"
            class="self-center text-xl font-semibold whitespace-nowrap"
          >
            {{ props.user?.username ? `@${props.user?.username}` : props.user?.fullName }}
          </span>
        </button>
      </div>
      <div class="flex md:hidden max-md:order-3">
        <ButtonsMenu id="header-nav" v-model:navHidden="navHidden" />
      </div>
      <div
        :class="`lg:order-2 md:order-4 max-md:order-4 max-sm:order-4 max-md:mt-2 justify-between items-center align-middle w-full md:flex lg:flex md:w-auto lg:w-auto ${
          navHidden ? 'hidden' : ''
        }`"
      >
        <ListsMenu id="header-nav" v-model:navHidden="navHidden" :routes="routes" />
      </div>
      <div class="flex lg:order-3 md:order-4 max-sm:order-1">
        <ButtonsTheme />
      </div>
    </div>
  </div>
</template>
