<template>
  <div class="bg-emerald text-gunmetal">
    <!-- <div
      class="grid grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4 place-items-center"
    >
      <div>
        <h2
          class="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400"
        >
          Company
        </h2>
        <ul class="text-gray-500 dark:text-gray-400">
          <li class="mb-4">
            <a href="#" class="hover:underline">About</a>
          </li>
          <li class="mb-4">
            <a href="#" class="hover:underline">Careers</a>
          </li>
          <li class="mb-4">
            <a href="#" class="hover:underline">Brand Center</a>
          </li>
          <li class="mb-4">
            <a href="#" class="hover:underline">Blog</a>
          </li>
        </ul>
      </div>
      <div>
        <h2
          class="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400"
        >
          Help center
        </h2>
        <ul class="text-gray-500 dark:text-gray-400">
          <li class="mb-4">
            <a href="#" class="hover:underline">Discord Server</a>
          </li>
          <li class="mb-4">
            <a href="#" class="hover:underline">Twitter</a>
          </li>
          <li class="mb-4">
            <a href="#" class="hover:underline">Facebook</a>
          </li>
          <li class="mb-4">
            <a href="#" class="hover:underline">Contact Us</a>
          </li>
        </ul>
      </div>
      <div>
        <h2
          class="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400"
        >
          Legal
        </h2>
        <ul class="text-gray-500 dark:text-gray-400">
          <li class="mb-4">
            <a href="#" class="hover:underline">Privacy Policy</a>
          </li>
          <li class="mb-4">
            <a href="#" class="hover:underline">Licensing</a>
          </li>
          <li class="mb-4">
            <a href="#" class="hover:underline">Terms &amp; Conditions</a>
          </li>
        </ul>
      </div>
      <div>
        <h2
          class="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400"
        >
          Download
        </h2>
        <ul class="text-gray-500 dark:text-gray-400">
          <li class="mb-4">
            <a href="#" class="hover:underline">iOS</a>
          </li>
          <li class="mb-4">
            <a href="#" class="hover:underline">Android</a>
          </li>
          <li class="mb-4">
            <a href="#" class="hover:underline">Windows</a>
          </li>
          <li class="mb-4">
            <a href="#" class="hover:underline">MacOS</a>
          </li>
        </ul>
      </div>
    </div> -->
    <div class="md:flex md:items-center md:justify-between py-4 px-4">
      <div class="flex my-2 max-md:justify-center">
        <span
          class="text-sm font-medium text-light-wine dark:text-dark-cherry-blossom-pink sm:text-center"
          >Made with ❤️ by {{ person.fullName }}.
        </span>
      </div>
      <div class="flex my-2 space-x-6 max-md:justify-center">
        <a
          :href="`https://facebook.com/${person.userName}`"
          class="text-light-wine dark:text-dark-cherry-blossom-pink hover:text-light-red-munsell dark:hover:text-dark-white"
        >
          <svg
            class="btn-footer-icon"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
            data-darkreader-inline-fill=""
            style="--darkreader-inline-fill: currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
        <a
          :href="`https://www.linkedin.com/in/${person.userName}`"
          class="text-light-wine dark:text-dark-cherry-blossom-pink hover:text-light-red-munsell dark:hover:text-dark-white"
        >
          <svg
            class="btn-footer-icon"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
            data-darkreader-inline-fill=""
            style="--darkreader-inline-fill: currentColor"
          >
            <path
              d="M21,3H3v18h18V3z M9,17H6.477v-7H9V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2 c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302 s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977C13.93,10.407,14.581,10,15.802,10 C17.023,10,18,10.977,18,13.174V17z"
            ></path>
          </svg>
        </a>
        <a
          :href="`https://github.com/${person.userName}`"
          class="text-light-wine dark:text-dark-cherry-blossom-pink hover:text-light-red-munsell dark:hover:text-dark-white"
        >
          <svg
            class="btn-footer-icon"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
            data-darkreader-inline-fill=""
            style="--darkreader-inline-fill: currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
        <a
          :href="`https://twitter.com/${person.userName}`"
          class="text-light-wine dark:text-dark-cherry-blossom-pink hover:text-light-red-munsell dark:hover:text-dark-white"
        >
          <svg
            class="btn-footer-icon"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
            data-darkreader-inline-fill=""
            style="--darkreader-inline-fill: currentColor"
          >
            <path
              d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>
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
