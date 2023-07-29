<script lang="ts" setup>
import Lanyard from '@/classes/lanyard';
import { Activities, LanyardSocketEvents } from '@/constants/lanyard';
import { ILanyardResponse } from '@/types/lanyard';
import { IUser } from '@/types/user';

const props = defineProps<{
  user?: IUser;
}>();

const discord = ref<IUser['social']['discord']>();

const mainActivity = computed(
  () =>
    discord.value?.activities?.findLast(
      (activity) => activity.type !== Activities.Custom,
    ),
);

onMounted(() => {
  function loadUser() {
    if (
      !props.user?.social.discord.id ??
      !props.user?.social.discord.discord_user?.id
    )
      return;
    const lanyard = new Lanyard({
      userId:
        props.user.social.discord.id ??
        props.user.social.discord.discord_user?.id,
    });
    function handler(data: ILanyardResponse) {
      discord.value = data;
    }
    lanyard.connect();
    lanyard.on(LanyardSocketEvents.initState, handler);
    lanyard.on(LanyardSocketEvents.presenceUpdate, handler);
    onUnmounted(() => {
      lanyard.off(LanyardSocketEvents.initState, handler);
      lanyard.off(LanyardSocketEvents.presenceUpdate, handler);
      lanyard.disconnect();
    });
  }
  loadUser();
});
</script>
<template>
  <div
    v-if="mainActivity"
    class="flex flex-col items-center justify-center rounded-lg bg-medium-spring-green p-3 dark:bg-prussian-blue"
  >
    <p class="text-center">
      <span class="font-semibold">{{ Activities[mainActivity.type] }}</span>
      {{ mainActivity.name }}
    </p>
  </div>
</template>
