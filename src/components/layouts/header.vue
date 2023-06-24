<template>
  <div class="px-2 sm:px-4 py-2.5 shadow bg-emerald text-gunmetal">
    <div class="flex flex-wrap justify-between mx-auto">
      <div class="flex lg:hidden md:order-1">
        <button
          class="btn-navbar-icon"
          type="button"
          aria-label="Toggle theme mode button"
          @click="setColor($colorMode.preference == 'dark' ? 'light' : 'dark')"
        >
          <svg
            v-if="$colorMode.value == 'dark'"
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
            />
          </svg>
          <svg
            v-else-if="$colorMode.value == 'light'"
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div class="flex lg:order-1 md:order-2">
        <NuxtLink
          class="flex items-center btn-navbar-icon"
          to="/"
          aria-label="'Redirect to home page"
        >
          <img
            class="rounded mr-2 h-8 sm:h-10"
            src="https://avatars.githubusercontent.com/u/45635827?v=4"
            :alt="`Picture of ${person.userName}`"
          />
          <span class="self-center text-xl font-semibold whitespace-nowrap"
            >@{{ person.userName }}</span
          >
        </NuxtLink>
      </div>
      <div class="flex lg:hidden md:order-3">
        <button
          class="btn-navbar-icon"
          type="button"
          data-collapse-toggle="navbar-sticky"
          aria-controls="navbar-sticky"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <nav
        class="lg:order-2 md:order-4 hidden justify-between items-center w-full lg:flex lg:w-auto"
        id="navbar-sticky"
      >
        <ul
          class="flex flex-col p-4 mt-4 rounded-lg max-lg:ring-2 max-lg:bg-tea-green dark:max-lg:bg-cadet-blue lg:flex-row lg:space-x-8 lg:mt-0 lg:text-sm lg:font-medium lg:border-0 ring-gunmetal"
        >
          <li>
            <NuxtLink class="btn-navbar-category" to="/about"> About </NuxtLink>
          </li>
          <li>
            <NuxtLink class="btn-navbar-category" to="/projects">
              Projects
            </NuxtLink>
          </li>
          <li>
            <NuxtLink class="btn-navbar-category" to="/contact">
              Contact
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <div class="flex lg:order-3 max-lg:hidden">
        <button
          class="btn-navbar-icon"
          type="button"
          aria-label="Toggle theme mode button"
          @click="setColor($colorMode.preference == 'dark' ? 'light' : 'dark')"
        >
          <svg
            v-if="$colorMode.value == 'dark'"
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
            />
          </svg>
          <svg
            v-else-if="$colorMode.value == 'light'"
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { setColor } from '../../typescript/scripts/setColor';
</script>
<script lang="ts">
import { PropType } from 'vue';
import Person from '../../typescript/classes/person';

export default {
  props: {
    person: {
      type: Object as PropType<Person>,
      required: false,
    },
  },
};
</script>
<style></style>
