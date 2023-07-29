<script lang="ts" setup>
import moment from 'moment';
import {
  AcademicCapIcon,
  CodeBracketIcon,
  DocumentTextIcon,
  FingerPrintIcon,
} from '@heroicons/vue/24/solid';
import { useStateStore } from '@/store/state';

const store = useStateStore();
const state = store.state;

const aboutCells = [
  { title: 'First name', value: state.user?.firstName },
  { title: 'Secondary name', value: state.user?.secondaryName },
  { title: "Father's last name", value: state.user?.fathersName },
  { title: "Mother's last name", value: state.user?.mothersName },
  { title: 'Gender', value: state.user?.gender },
  {
    title: 'Birthdate',
    value: state.user?.birthdate
      ? moment(state.user?.birthdate).format('L')
      : undefined,
  },
  { title: 'Age', value: state.user?.age },
  {
    title: 'Birthday',
    value: state.user?.birthday
      ? moment(state.user?.birthday).format('L')
      : undefined,
  },
];
</script>
<template>
  <div class="m-2 h-fit w-full">
    <div class="no-wrap max-md:space-y-2 md:flex md:space-x-2">
      <div class="sticky col-span-2 w-full space-y-2 md:w-3/12">
        <div
          v-if="state.user?.social.github.avatar_url"
          class="flex flex-col items-center justify-center rounded-lg bg-medium-spring-green p-3 dark:bg-prussian-blue"
        >
          <NuxtImg
            :src="state.user?.social.github.avatar_url"
            :alt="
              state.user?.social.github.username ??
              (`${state.user?.social.github.username} avatar` || 'avatar')
            "
            class="mx-auto h-auto rounded-full max-sm:w-[43vw] sm:w-[43vw] lg:w-[70vw]"
            :sizes="{
              lg: '70vw',
              md: '43vw',
              sm: '43vw',
            }"
            :width="0"
            :height="0"
          />
        </div>
        <div
          class="flex flex-col items-center justify-center rounded-lg bg-medium-spring-green p-3 dark:bg-prussian-blue"
        >
          <p
            v-if="state.user?.fullName"
            class="my-1 text-center text-lg font-bold leading-8"
          >
            {{ state.user?.fullName }}
          </p>
          <p v-if="state.user?.jobTitle" class="font-lg text-center leading-6">
            {{ state.user?.jobTitle }}
          </p>
        </div>
        <CardsDiscordActivity :user="state.user" />
      </div>
      <div class="w-full space-y-2">
        <div
          v-if="state.user?.description"
          class="rounded-lg bg-medium-spring-green p-3 shadow-sm dark:bg-prussian-blue"
        >
          <div class="mb-3 flex items-center space-x-2 font-semibold leading-8">
            <DocumentTextIcon class="h-6 w-6" />
            <FontsH2>Description</FontsH2>
          </div>
          <div class="m-2 text-sm">
            <p>{{ state.user?.description }}</p>
          </div>
        </div>
        <div
          v-if="aboutCells.filter((cell) => cell.value).length > 0"
          class="rounded-lg bg-medium-spring-green p-3 shadow-sm dark:bg-prussian-blue"
        >
          <div class="mb-3 flex items-center space-x-2 font-semibold leading-8">
            <FingerPrintIcon class="h-6 w-6" />
            <FontsH2>Information</FontsH2>
          </div>
          <div class="m-2 grid gap-2 text-sm md:grid-cols-2">
            <div
              v-for="(aboutCell, index) in aboutCells"
              :key="index"
              class="grid grid-cols-2 gap-2"
            >
              <p class="font-semibold">
                {{ aboutCell.title }}
              </p>
              <p>
                {{ aboutCell.value }}
              </p>
            </div>
          </div>
        </div>
        <div>
          <div
            class="text-sm max-md:grid max-md:space-y-2 md:flex md:space-x-2"
          >
            <div
              v-if="state.user?.technologies?.length"
              class="rounded-lg bg-medium-spring-green p-3 shadow-sm dark:bg-prussian-blue md:flex-1"
            >
              <div class="flex items-center space-x-2 font-semibold leading-8">
                <CodeBracketIcon class="h-6 w-6" />
                <FontsH2>Tecnologies</FontsH2>
              </div>
              <ul class="m-2 grid list-inside list-disc grid-cols-2 gap-2">
                <li
                  v-for="(technology, index) in Array.from(
                    state.user?.technologies,
                  )?.sort((a, b) => (a > b ? 1 : -1))"
                  :key="index"
                >
                  {{ technology }}
                </li>
              </ul>
            </div>
            <div
              v-if="state.user?.education?.length"
              class="rounded-lg bg-medium-spring-green p-3 shadow-sm dark:bg-prussian-blue md:flex-1"
            >
              <div class="flex items-center space-x-2 font-semibold leading-8">
                <AcademicCapIcon class="h-6 w-6" />
                <FontsH2>Education</FontsH2>
              </div>
              <ul class="m-2 grid list-inside list-disc gap-2">
                <li
                  v-for="(school, index) in Array.from(
                    state.user?.education,
                  )?.sort((a, b) => (a > b ? 1 : -1))"
                  :key="index"
                >
                  {{ school }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
