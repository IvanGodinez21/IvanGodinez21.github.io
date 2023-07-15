<script lang="ts" setup>
import { HTMLAttributes } from 'vue';
import Route from '@/classes/route';

const props = defineProps<{
  id: HTMLAttributes['id'];
  routes: Route[];
}>();

const navHidden = useState('navHidden');
</script>
<template>
  <nav :id="props.id">
    <ul
      class="flex flex-col rounded-lg max-md:ring-2 max-md:bg-tea-green dark:max-md:bg-gunmetal md:flex-row md:space-x-4 md:text-sm md:font-medium ring-gunmetal dark:ring-tea-green max-md:text-gunmetal dark:max-md:text-tea-green"
    >
      <li v-for="(route, index) in props.routes" :key="index">
        <NuxtLink
          :class="['btn-navbar-category', { 'bg-cadet-blue dark:bg-keppel': $route.path === route.path }]"
          :to="route.path"
          @click="navHidden = true"
        >
          {{ route.name.charAt(0).toUpperCase() + route.name.slice(1) }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
