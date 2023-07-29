<script lang="ts" setup>
import { HTMLAttributes } from 'vue';
import Route from '@/classes/route';

const props = defineProps<{
  id: HTMLAttributes['id'];
  navHidden: boolean;
  routes: Route[];
}>();

defineEmits(['update:navHidden']);
</script>
<template>
  <nav :id="props.id">
    <ul
      class="flex flex-col rounded-lg ring-gunmetal dark:ring-tea-green max-md:bg-tea-green max-md:text-gunmetal max-md:ring-2 dark:max-md:bg-gunmetal dark:max-md:text-tea-green md:flex-row md:space-x-4 md:text-sm md:font-medium"
    >
      <li v-for="(route, index) in props.routes" :key="index">
        <button
          :class="[
            'btn-navbar-category w-full text-left',
            { 'bg-cadet-blue dark:bg-keppel': $route.path === route.path },
          ]"
          type="button"
          @pointerup="
            () => {
              $router.push({ path: route.path });
              $emit('update:navHidden', true);
            }
          "
        >
          {{ route.name.charAt(0).toUpperCase() + route.name.slice(1) }}
        </button>
      </li>
    </ul>
  </nav>
</template>
