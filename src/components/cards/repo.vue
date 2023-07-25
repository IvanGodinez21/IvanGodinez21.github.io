<script lang="ts" setup>
import { ArrowTrendingUpIcon, EyeIcon, StarIcon } from '@heroicons/vue/24/solid';
import { IRepo } from '@/types/repos';

defineProps<{
  repo: IRepo;
}>();

function getStatusText({ isArchived, isPrivate }: { isArchived: IRepo['archived']; isPrivate: IRepo['private'] }) {
  if (!isArchived) return isPrivate ? 'Private' : 'Public';
  return isArchived && !isPrivate ? 'Public Archive' : 'Private Archive';
}

function getStatusClass({ isArchived, isPrivate }: { isArchived: IRepo['archived']; isPrivate: IRepo['private'] }) {
  if (!isArchived) return isPrivate ? 'bg-red-500' : 'bg-green-500';
  return isArchived && !isPrivate ? 'bg-yellow-500' : 'bg-orange-500';
}
</script>
<template>
  <div class="bg-medium-spring-green dark:bg-prussian-blue p-4 shadow-md rounded-lg hover:shadow-lg transition-shadow">
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
</template>
