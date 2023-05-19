<style scoped>
.overlay {
  width: 100%;
  height: 100%;
  background-size: cover;
}
</style>

<script lang="ts" setup>
import {Game} from "@/game/Game";
import {onMounted, ref, watch} from "vue";
import PlayerCard from "@/components/Game/PlayerCard.vue";
import Location from "@/components/Game/Location.vue";

const props = defineProps<{
  gameInstance: Game
}>()

const game = ref(props.gameInstance)

watch(game, value => {}, {deep: true})

onMounted(() => {
  const audio = new Audio(game.value.map.getSoundtrackPath())
  audio.loop = true
  // audio.play()
})
</script>


<template>
  <div class="overlay" :style="{backgroundImage: `url(${game.map.getMapImage()})`}">
    <div class="flex flex-col w-full h-full" style="background: rgba(0,0,0,0.4)">
      <div class="flex w-full p-5 flex-col justify-center items-center" style="background: rgba(0,0,0,0.7);">
        <div class="text-white mb-5 text-center">
          <h1 class="text-special text-3xl">Galactic Assault</h1>
          <div class="mt-3 text-xl">
            <span class="font-bold"
                  :style="{color: game.era.lightSideInstance().getColor()}">{{
                game.era.lightSideInstance().getName
              }}</span>
            <span class="tracking-widest"> VS </span>
            <span class="font-bold" :style="{color: game.era.darkSideInstance().getColor()}">{{
                game.era.darkSideInstance().getName
              }}</span>
          </div>
        </div>
        <div class="z-10 w-full h-full flex justify-between gap-x-3">
          <player-card
              :is-compact="true"
              class="w-full"
              :class="game.currentPlayerIndex === player.id ? 'animated' : ''"
              style="max-height: 75px"
              v-for="player in game.getAllPlayers()"
              :instance="player"/>
        </div>
      </div>
      <div class="flex flex-wrap w-full h-full select-none">
        <location
            style="width: 20%;height: 20%;"
            :instance="location"
            :players="game.getAllPlayers()"
            :game="game"
            @move-to-sector="game.movePlayer(...$event, game.getCurrentPlayer())"
            @discover="game.discoverArea($event, game.getCurrentPlayer())"
            v-for="(location, key) in game.map.locations"/>
      </div>
    </div>
  </div>
</template>