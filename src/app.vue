<template>
  <NuxtLayout class="bg-tea-green dark:bg-gunmetal" :person="person" />
</template>
<script lang="ts">
import Person from './typescript/classes/person';

export default {
  layout: 'default',
  data() {
    return {
      person: new Person({
        birthDay: new Date(this.$config.public.person.birthDay),
        email: this.$config.public.person.email,
        fathersName: this.$config.public.person.fathersName,
        firstName: this.$config.public.person.firstName,
        mothersName: this.$config.public.person.mothersName,
        userName: this.$config.public.person.userName,
        secondaryName: this.$config.public.person.secondaryName,
      }),
    };
  },
};
</script>
<style></style>
