<script lang="ts" setup>
import moment from 'moment';
import { AcademicCapIcon, CodeBracketIcon, DocumentTextIcon, FingerPrintIcon } from '@heroicons/vue/24/solid';
import { useStateStore } from '@/store/state';

const store = useStateStore();
const state = store.state;

const aboutCells = [
  { title: 'First name', value: state.user?.firstName },
  { title: 'Secondary name', value: state.user?.secondaryName },
  { title: "Father's last name", value: state.user?.fathersName },
  { title: "Mother's last name", value: state.user?.mothersName },
  { title: 'Gender', value: state.user?.gender },
  { title: 'Birthdate', value: state.user?.birthdate ? moment(state.user?.birthdate).format('L') : undefined },
  { title: 'Age', value: state.user?.age },
  { title: 'Birthday', value: state.user?.birthday ? moment(state.user?.birthday).format('L') : undefined },
];
</script>
<template>
  <div class="h-fit w-full m-2">
    <div class="md:flex no-wrap md:space-x-2 max-md:space-y-2">
      <div class="col-span-2 w-full md:w-3/12 space-y-2 sticky">
        <div
          v-if="state.user?.social.github.avatar_url"
          class="bg-medium-spring-green dark:bg-prussian-blue p-3 rounded-lg flex flex-col justify-center items-center"
        >
          <NuxtImg
            :src="state.user?.social.github.avatar_url"
            :alt="state.user?.social.github.username ?? (`${state.user?.social.github.username} avatar` || 'avatar')"
            class="h-auto lg:w-[70vw] sm:w-[43vw] max-sm:w-[43vw] mx-auto rounded-full"
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
          class="bg-medium-spring-green dark:bg-prussian-blue p-3 rounded-lg flex flex-col justify-center items-center"
        >
          <p v-if="state.user?.fullName" class="font-bold text-lg text-center leading-8 my-1">
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
          class="bg-medium-spring-green dark:bg-prussian-blue p-3 shadow-sm rounded-lg"
        >
          <div class="flex items-center space-x-2 font-semibold leading-8 mb-3">
            <DocumentTextIcon class="h-6 w-6" />
            <FontsH2>Description</FontsH2>
          </div>
          <div class="text-sm m-2">
            <p>{{ state.user?.description }}</p>
          </div>
        </div>
        <div
          v-if="aboutCells.filter((cell) => cell.value).length > 0"
          class="bg-medium-spring-green dark:bg-prussian-blue p-3 shadow-sm rounded-lg"
        >
          <div class="flex items-center space-x-2 font-semibold leading-8 mb-3">
            <FingerPrintIcon class="h-6 w-6" />
            <FontsH2>Information</FontsH2>
          </div>
          <div class="grid md:grid-cols-2 text-sm gap-2 m-2">
            <div v-for="(aboutCell, index) in aboutCells" :key="index" class="grid grid-cols-2 gap-2">
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
          <div class="md:flex max-md:grid max-md:space-y-2 md:space-x-2 text-sm">
            <div
              v-if="state.user?.technologies?.length"
              class="bg-medium-spring-green dark:bg-prussian-blue p-3 shadow-sm rounded-lg md:flex-1"
            >
              <div class="flex items-center space-x-2 font-semibold leading-8">
                <CodeBracketIcon class="w-6 h-6" />
                <FontsH2>Tecnologies</FontsH2>
              </div>
              <ul class="list-inside list-disc grid grid-cols-2 gap-2 m-2">
                <li
                  v-for="(technology, index) in Array.from(state.user?.technologies)?.sort((a, b) => (a > b ? 1 : -1))"
                  :key="index"
                >
                  {{ technology }}
                </li>
              </ul>
            </div>
            <div
              v-if="state.user?.education?.length"
              class="bg-medium-spring-green dark:bg-prussian-blue p-3 shadow-sm rounded-lg md:flex-1"
            >
              <div class="flex items-center space-x-2 font-semibold leading-8">
                <AcademicCapIcon class="w-6 h-6" />
                <FontsH2>Education</FontsH2>
              </div>
              <ul class="list-inside list-disc grid gap-2 m-2">
                <li
                  v-for="(school, index) in Array.from(state.user?.education)?.sort((a, b) => (a > b ? 1 : -1))"
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
