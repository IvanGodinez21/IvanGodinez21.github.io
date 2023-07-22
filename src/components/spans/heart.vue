<script lang="ts" setup>
import TsparticlesTools from '@/classes/tsparticles_tools';

const isHover = ref(false);

function emitHearts({ e }: { e: PointerEvent | MouseEvent }) {
  TsparticlesTools.emit({ eventTarget: e.target, preset: 'hearts' });
  isHover.value = true;
}
</script>
<template>
  <span
    class="animate-heartbeat inline-block"
    @click="(e) => emitHearts({ e })"
    @pointerover="(e) => emitHearts({ e })"
    @pointerout="
      () => {
        isHover = false;
      }
    "
  >
    {{ isHover ? '💚' : '❤️' }}
  </span>
</template>
