<script lang="ts" setup>
import { routes } from '@/constants/routes';
import { IUser } from '@/types/user';

const props = defineProps<{
  user?: IUser;
}>();

const navHidden = ref(true);
</script>
<template>
  <div class="bg-emerald p-2 text-gunmetal shadow">
    <div class="mx-2 flex flex-wrap justify-between">
      <div class="flex max-lg:order-1 max-sm:order-2">
        <button
          aria-label="Redirect to start page"
          title="Start page"
          class="btn-navbar-icon flex items-center"
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
            class="self-center whitespace-nowrap text-xl font-semibold"
          >
            {{
              props.user?.username
                ? `@${props.user?.username}`
                : props.user?.fullName
            }}
          </span>
        </button>
      </div>
      <div class="flex max-md:order-3 md:hidden">
        <ButtonsMenu id="header-nav" v-model:navHidden="navHidden" />
      </div>
      <div
        :class="`w-full items-center justify-between align-middle max-md:order-4 max-md:mt-2 max-sm:order-4 md:order-4 md:flex md:w-auto lg:order-2 lg:flex lg:w-auto ${
          navHidden ? 'hidden' : ''
        }`"
      >
        <ListsMenu
          id="header-nav"
          v-model:navHidden="navHidden"
          :routes="routes"
        />
      </div>
      <div class="flex max-sm:order-1 md:order-4 lg:order-3">
        <ButtonsTheme />
      </div>
    </div>
  </div>
</template>
