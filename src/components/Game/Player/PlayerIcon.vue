<script setup lang="ts">
import {Player} from "@/game/Player/Player";
import {Tippy} from "vue-tippy";
import 'tippy.js/dist/tippy.css'

const props = defineProps<{
  instance: Player,
  isCurrent: boolean
}>()

const emit = defineEmits(['openPlayerInventory'])
</script>

<style scoped lang="scss">

</style>

<template>
  <tippy class="z-10" :content="props.instance.name" :show-on-create="true">
    <div class="transition-all z-50 hover:scale-125" @click.stop="emit('openPlayerInventory', props.instance)">
      <div class="w-full bg-gray-200 rounded-full h-1.5 mb-1"
           style="min-width: 50px">
        <div class="bg-red-600 h-1.5 rounded-full transition-all"
             :style="{width: `${props.instance.getHealth()}%`}"></div>
      </div>
      <div class="w-10 h-10 rounded-full p-1"
           :class="isCurrent ? 'animated needs-glowing rounded-glowing': 'rounded-full bg-black'">
        <img class="auto-img rounded-full" :src="props.instance.getCharacter().icon"/>
      </div>
    </div>
  </tippy>
</template>