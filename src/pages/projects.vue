<script lang="ts" setup>
import { content } from '@/contexts/scroll_ref';
import { useStateStore } from '@/store/state';

const store = useStateStore();
const state = store.state;

const isLoading = ref(false);

async function getReposByPage() {
  isLoading.value = true;
  const newRepos = await getRepos({ page: state.reposPage });
  if (newRepos.length) {
    const uniqueRepos = newRepos.filter((repo) => !state.repos.map((prevRepo) => prevRepo.id).includes(repo.id));
    store.setRepos({ value: [...state.repos, ...uniqueRepos] });
    store.setReposPage({ value: state.reposPage + 1 });
  }
  isLoading.value = false;
}

async function handleScroll() {
  if (content?.value) {
    const scrollPosition = content.value.scrollHeight - content.value.clientHeight;
    if (Math.ceil(content.value.scrollTop) >= scrollPosition) {
      await getReposByPage();
    }
  }
}

onMounted(() => {
  (async () => {
    if (!state.repos.length) await getReposByPage();
    if (content?.value) {
      content.value.addEventListener('scroll', handleScroll);
    }
  })();
});

onBeforeUnmount(() => {
  if (content?.value) {
    content.value.removeEventListener('scroll', handleScroll);
  }
});
</script>
<template>
  <div class="h-fit w-fit grid m-2 gap-2">
    <NuxtLink
      v-for="repo in state.repos"
      :key="repo.id"
      :href="repo.html_url"
      target="_blank"
      rel="noopener noreferrer"
      :class="`${repo.private ? 'cursor-not-allowed' : 'cursor-pointer'}`"
    >
      <CardsRepo :repo="repo" />
    </NuxtLink>
  </div>
</template>
