<script lang="ts" setup>
import moment from 'moment';
import { AcademicCapIcon, CodeBracketIcon, DocumentTextIcon, FingerPrintIcon } from '@heroicons/vue/24/solid';
import { IUser } from '@/types/user';

const user = (await useFetch('/api/user')).data.value as IUser;
const aboutCells = [
  { title: 'First name', value: user.firstName },
  { title: 'Secondary name', value: user.secondaryName },
  { title: "Father's last name", value: user.fathersName },
  { title: "Mother's last name", value: user.mothersName },
  { title: 'Gender', value: user.gender },
  { title: 'Birthdate', value: user.birthdate ? moment(user.birthdate).format('L') : undefined },
  { title: 'Age', value: user.age },
  { title: 'Birthday', value: user.birthday ? moment(user.birthday).format('L') : undefined },
];
</script>
<template>
  <div class="h-fit w-full m-2">
    <div class="md:flex no-wrap md:space-x-2 max-md:space-y-2">
      <div class="col-span-2 w-full md:w-3/12 space-y-2 sticky">
        <div
          v-if="user.social.github.avatar_url"
          class="bg-medium-spring-green dark:bg-prussian-blue p-3 rounded-lg flex flex-col justify-center items-center"
        >
          <NuxtImg
            :src="user.social.github.avatar_url"
            :alt="user.social.github.username || `${user.social.github.username} avatar` || 'avatar'"
            class="h-auto w-fit mx-auto rounded-full"
            :sizes="{
              sm: '46vw',
              md: '46vw',
              lg: '70vw',
            }"
            :width="0"
            :height="0"
          />
        </div>
        <div
          class="bg-medium-spring-green dark:bg-prussian-blue p-3 rounded-lg flex flex-col justify-center items-center"
        >
          <p v-if="user.fullName" class="font-bold text-lg text-center leading-8 my-1">
            {{ user.fullName }}
          </p>
          <p v-if="user.jobTitle" class="font-lg text-center leading-6">
            {{ user.jobTitle }}
          </p>
        </div>
        <CardsDiscordActivity :user="user" />
      </div>
      <div class="w-full space-y-2">
        <div v-if="user.description" class="bg-medium-spring-green dark:bg-prussian-blue p-3 shadow-sm rounded-lg">
          <div class="flex items-center space-x-2 font-semibold leading-8 mb-3">
            <DocumentTextIcon class="h-6 w-6" />
            <FontsH2>Description</FontsH2>
          </div>
          <div class="text-sm m-2">
            <p>{{ user.description }}</p>
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
              v-if="user.technologies?.length"
              class="bg-medium-spring-green dark:bg-prussian-blue p-3 shadow-sm rounded-lg md:flex-1"
            >
              <div class="flex items-center space-x-2 font-semibold leading-8">
                <CodeBracketIcon class="w-6 h-6" />
                <FontsH2>Tecnologies</FontsH2>
              </div>
              <ul class="list-inside list-disc grid grid-cols-2 gap-2 m-2">
                <li
                  v-for="(technology, index) in user.technologies?.slice().sort((a, b) => (a > b ? 1 : -1))"
                  :key="index"
                >
                  {{ technology }}
                </li>
              </ul>
            </div>
            <div
              v-if="user.education?.length"
              class="bg-medium-spring-green dark:bg-prussian-blue p-3 shadow-sm rounded-lg md:flex-1"
            >
              <div class="flex items-center space-x-2 font-semibold leading-8">
                <AcademicCapIcon class="w-6 h-6" />
                <FontsH2>Education</FontsH2>
              </div>
              <ul class="list-inside list-disc grid gap-2 m-2">
                <li v-for="(school, index) in user.education?.slice().sort((a, b) => (a > b ? 1 : -1))" :key="index">
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
