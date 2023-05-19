<script setup lang="ts">
import {Side} from "@/game/Sides/Side";
import {Player} from "@/game/Player";
import PlayerCard from "@/components/Game/PlayerCard.vue";

const props = defineProps<{
  side: Side
  icon: {
    src: string,
    width: number
  },
  players: Player[]
}>()

const emit = defineEmits(['addNewPlayer'])
</script>

<template>
  <div>
    <h2 class="icon-header h-10">
      <img :width="props.icon.width" :src="props.icon.src">
      {{ props.side.getName }}
    </h2>
    <div class="grid grid-rows-2 gap-4 mt-5">
      <player-card
          class="col-span-6 sm:col-span-3"
          :instance="player"
          v-for="player in props.players"/>
      <div @click="emit('addNewPlayer')" v-if="players.length < 2"
           class="py-5 needs-glowing flex justify-center items-center click-sound col-span-6 sm:col-span-3 select-none cursor-pointer">
        <div>
          <font-awesome-icon class="text-3xl" icon="fa-solid fa-user-plus"/>
        </div>
      </div>
    </div>
  </div>
</template>