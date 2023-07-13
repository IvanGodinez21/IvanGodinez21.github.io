<script lang="ts" setup>
import { PropType } from 'vue';
import Route from '@/classes/route';

const navHidden = useState('navHidden');
</script>
<script lang="ts">
export default {
  props: {
    id: {
      type: String,
      required: false,
      default: undefined,
    },
    routes: {
      type: Array as PropType<Route[]>,
      required: true,
    },
  },
};
</script>
<template>
  <nav :id="id">
    <ul
      class="flex flex-col rounded-lg max-md:ring-2 max-md:bg-tea-green dark:max-md:bg-gunmetal md:flex-row md:space-x-4 md:text-sm md:font-medium ring-gunmetal dark:ring-tea-green max-md:text-gunmetal dark:max-md:text-tea-green"
    >
      <li v-for="(route, index) in routes" :key="index">
        <router-link
          :class="['btn-navbar-category', { 'bg-cadet-blue dark:bg-keppel': $route.path === route.path }]"
          :to="route.path"
          @click="navHidden = true"
        >
          {{ route.name.charAt(0).toUpperCase() + route.name.slice(1) }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>
