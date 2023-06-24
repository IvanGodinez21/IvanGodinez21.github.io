<template>
  <div class="flex items-center space-x-4">
    <div class="flex-shrink-0">
      <img class="w-8 h-8 rounded-full" src="" :alt="medium + ' icon'" />
    </div>
    <div class="flex-1 min-w-0">
      <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
        {{ medium }}
      </p>
      <p class="text-sm text-gray-500 truncate dark:text-gray-400">
        {{ username }}
      </p>
    </div>
    <div
      class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
    >
      <a
        :href="getMediumLink({ medium, username })"
        class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >{{ buttonText }}
        <svg
          aria-hidden="true"
          class="ml-2 -mr-1 w-4 h-4"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </a>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  props: {
    medium: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    buttonText: {
      type: String,
      required: true,
      default: 'Go to',
    },
  },
  methods: {
    getMediumLink({
      medium,
      username,
    }: {
      medium: string;
      username: string;
    }): string | undefined {
      if (!medium || !username) return undefined;
      switch (medium) {
        case 'Email':
          return `mailto:${username}`;
        case 'Facebook':
          return `https://www.facebook.com/${username}`;
        case 'LinkedIn':
          return `https://www.linkedin.com/in/${username}`;
        case 'GitHub':
          return `https://github.com/${username}`;
        case 'Twitter':
          return `https://twitter.com/${username}`;
      }
    },
  },
};
</script>
