<script setup lang="ts">
import {Player} from "@/game/Player";
import {Tippy} from "vue-tippy";
import 'tippy.js/dist/tippy.css'

const props = defineProps<{
  instance: Player,
  isCurrent: boolean
}>()
</script>

<template>
  <tippy class="z-10" :content="props.instance.name">
    <div class="transition-all">
      <div class="w-10 h-10 rounded-full p-1"
           :class="isCurrent ? 'animated needs-glowing rounded-glowing': 'rounded-full bg-black'">
        <img class="auto-img rounded-full" :src="props.instance.side.character.icon"/>
      </div>
    </div>
  </tippy>
</template>