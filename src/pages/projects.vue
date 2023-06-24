<template>
  <div>
    <div class="grid justify-center">
      <h1 class="text-2xl font-semibold first-letter:uppercase">
        {{ $route.name }}
      </h1>
    </div>
    <div>
      <CardsProject
        imageUrl="https://cdn.pixabay.com/photo/2016/11/29/04/19/ocean-1867285__480.jpg"
        title="DisCuts"
        description="An"
      />
    </div>
  </div>
</template>
<script lang="ts">
export default {
  // methods: {
  //   async getUserRepositories() {
  //     await octokit.getUserRepositories();
  //   },
  // },
};
</script>
<style></style>
