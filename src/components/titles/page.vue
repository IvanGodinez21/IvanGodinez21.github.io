<template>
  <h1
    class="text-2xl font-semibold first-letter:uppercase text-gunmetal dark:text-tea-green"
    v-if="$route.path !== '/'"
  >
    {{ $route.name }}
  </h1>
  <h1
    v-else
    class="text-2xl font-semibold first-letter:uppercase text-gunmetal dark:text-tea-green"
  >
    Welcome to my website
  </h1>
</template>
