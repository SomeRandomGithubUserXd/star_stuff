<script setup lang="ts">
import {Player} from "@/game/Player";

const props = defineProps<{
  instance: Player,
  isCurrent: boolean
}>()
</script>

<template>
  <div class="z-10 transition-all">
    <div class="w-10 h-10 rounded-full p-1" :class="isCurrent ? 'animated needs-glowing rounded-glowing': 'rounded-full bg-black'">
      <img class="auto-img rounded-full" :src="props.instance.side.character.icon"/>
    </div>
  </div>
</template>