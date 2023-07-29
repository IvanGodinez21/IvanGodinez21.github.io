<script lang="ts" setup>
import TsparticlesTools from '@/classes/tsparticles_tools';

const isHover = ref(false);

function emitHearts({ e }: { e: PointerEvent }) {
  TsparticlesTools.emit({ eventTarget: e.target, preset: 'hearts' });
  isHover.value = true;
}
</script>
<template>
  <span
    class="inline-block animate-heartbeat"
    @pointerup="(e) => emitHearts({ e })"
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
