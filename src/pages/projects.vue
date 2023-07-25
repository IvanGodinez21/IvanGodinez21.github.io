<script lang="ts" setup>
import { ArrowTrendingUpIcon, EyeIcon, StarIcon } from '@heroicons/vue/24/solid';
import { content } from '@/contexts/scroll_ref';
import { IRepo } from '@/types/repos';
import { useStateStore } from '@/store/state';

const store = useStateStore();
const state = store.state;

const isLoading = ref(false);

function getStatusText({ isArchived, isPrivate }: { isArchived: IRepo['archived']; isPrivate: IRepo['private'] }) {
  if (!isArchived) return isPrivate ? 'Private' : 'Public';
  return isArchived && !isPrivate ? 'Public Archive' : 'Private Archive';
}

function getStatusClass({ isArchived, isPrivate }: { isArchived: IRepo['archived']; isPrivate: IRepo['private'] }) {
  if (!isArchived) return isPrivate ? 'bg-red-500' : 'bg-green-500';
  return isArchived && !isPrivate ? 'bg-yellow-500' : 'bg-orange-500';
}

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
  <div class="h-fit w-fit m-2">
    <NuxtLink
      v-for="(repo, i) in state.repos"
      :key="repo.id"
      :href="repo.html_url"
      target="_blank"
      rel="noopener noreferrer"
      :class="`${repo.private ? 'cursor-not-allowed' : 'cursor-pointer'}`"
    >
      <div
        :class="`bg-medium-spring-green dark:bg-prussian-blue shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow ${
          i !== state.repos.length - 1 ? 'mb-2' : ''
        } ${i !== 0 ? 'mt-2' : ''}`"
      >
        <div class="flex gap-2 items-center mb-2">
          <span
            :class="`inline-block rounded px-2 py-1 text-sm text-white ${getStatusClass({
              isArchived: repo.archived,
              isPrivate: repo.private,
            })}`"
          >
            {{ getStatusText({ isArchived: repo.archived, isPrivate: repo.private }) }}
          </span>
          <FontsH2 class="font-medium break-all">
            {{ repo.owner.login }}/{{ repo.name }}
          </FontsH2>
        </div>
        <p class="mt-1">
          {{ repo.description }}
        </p>
        <div class="flex flex-wrap gap-2 items-center mt-2">
          <span
            v-if="repo.language"
            title="Language"
            :class="`bg-keppel dark:bg-cadet-blue rounded-full px-3 py-1 text-sm`"
          >
            <p>{{ repo.language }}</p>
          </span>
          <span
            title="Stars"
            :class="`flex flex-row space-x-2 bg-keppel dark:bg-cadet-blue rounded-full px-3 py-1 text-sm`"
          >
            <StarIcon class="w-5 h-5" />
            <p>{{ repo.stargazers_count }}</p>
          </span>
          <span
            title="Watchers"
            :class="`flex flex-row space-x-2 bg-keppel dark:bg-cadet-blue rounded-full px-3 py-1 text-sm`"
          >
            <EyeIcon class="w-5 h-5" />
            <p>{{ repo.watchers_count }}</p>
          </span>
          <span
            title="Forks"
            :class="`flex flex-row space-x-2 bg-keppel dark:bg-cadet-blue rounded-full px-3 py-1 text-sm`"
          >
            <ArrowTrendingUpIcon class="w-5 h-5" />
            <p>{{ repo.forks_count }}</p>
          </span>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>
