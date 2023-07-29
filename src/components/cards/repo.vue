<script lang="ts" setup>
import {
  ArrowTrendingUpIcon,
  EyeIcon,
  StarIcon,
} from '@heroicons/vue/24/solid';
import { IRepo } from '@/types/repos';

defineProps<{
  repo: IRepo;
}>();

function getStatusText({
  isArchived,
  isPrivate,
}: {
  isArchived: IRepo['archived'];
  isPrivate: IRepo['private'];
}) {
  if (!isArchived) return isPrivate ? 'Private' : 'Public';
  return isArchived && !isPrivate ? 'Public Archive' : 'Private Archive';
}

function getStatusClass({
  isArchived,
  isPrivate,
}: {
  isArchived: IRepo['archived'];
  isPrivate: IRepo['private'];
}) {
  if (!isArchived) return isPrivate ? 'bg-red-500' : 'bg-green-500';
  return isArchived && !isPrivate ? 'bg-yellow-500' : 'bg-orange-500';
}
</script>
<template>
  <div
    class="rounded-lg bg-medium-spring-green p-4 shadow-md transition-shadow hover:shadow-lg dark:bg-prussian-blue"
  >
    <div class="mb-2 flex items-center gap-2">
      <span
        :class="`inline-block rounded px-2 py-1 text-sm text-white ${getStatusClass(
          {
            isArchived: repo.archived,
            isPrivate: repo.private,
          },
        )}`"
      >
        {{
          getStatusText({ isArchived: repo.archived, isPrivate: repo.private })
        }}
      </span>
      <FontsH2 class="break-all font-medium">
        {{ repo.owner.login }}/{{ repo.name }}
      </FontsH2>
    </div>
    <p class="mt-1">
      {{ repo.description }}
    </p>
    <div class="mt-2 flex flex-wrap items-center gap-2">
      <span
        v-if="repo.language"
        title="Language"
        :class="`rounded-full bg-keppel px-3 py-1 text-sm dark:bg-cadet-blue`"
      >
        <p>{{ repo.language }}</p>
      </span>
      <span
        title="Stars"
        :class="`flex flex-row space-x-2 rounded-full bg-keppel px-3 py-1 text-sm dark:bg-cadet-blue`"
      >
        <StarIcon class="h-5 w-5" />
        <p>{{ repo.stargazers_count }}</p>
      </span>
      <span
        title="Watchers"
        :class="`flex flex-row space-x-2 rounded-full bg-keppel px-3 py-1 text-sm dark:bg-cadet-blue`"
      >
        <EyeIcon class="h-5 w-5" />
        <p>{{ repo.watchers_count }}</p>
      </span>
      <span
        title="Forks"
        :class="`flex flex-row space-x-2 rounded-full bg-keppel px-3 py-1 text-sm dark:bg-cadet-blue`"
      >
        <ArrowTrendingUpIcon class="h-5 w-5" />
        <p>{{ repo.forks_count }}</p>
      </span>
    </div>
  </div>
</template>
