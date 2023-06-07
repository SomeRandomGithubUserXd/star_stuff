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
import PlayerCard from "@/components/Game/Player/PlayerCard.vue";
import Location from "@/components/Game/Location.vue";
import QuestModal from "@/components/Game/Quests/QuestModal.vue";
import {Player} from "@/game/Player/Player";
import FightModal from "@/components/Game/Fight/FightModal.vue";
import {Fight} from "@/game/Fight/Fight";

const props = defineProps<{
  gameInstance: Game
}>()

const game = ref(props.gameInstance)

const playerCards = ref(null)

const openPlayerInventory = (defendingPlayer: Player) => {
  for (const component of playerCards.value) {
    if (component.getPlayer().id === defendingPlayer.id) {
      component.openPlayerInventory()
    }
  }
}
</script>
<template>
  <div class="overlay" :style="{backgroundImage: `url(${game.map.getMapImage()})`}">
    <quest-modal :game="game"/>
    <fight-modal :game="game"/>
    <div class="flex flex-col w-full h-full" style="background: rgba(0,0,0,0.4)">
      <div class="flex w-full p-5 flex-col gap-y-3 justify-center items-center" style="background: rgba(0,0,0,0.7);">
        <div class="z-10 w-full h-full flex justify-center gap-x-3">
          <player-card
              @attack-character="game.startAFight($event)"
              ref="playerCards"
              :is-compact="true"
              class="w-full max-w-screen-md"
              :class="game.getCurrentPlayer().id === player.id ? 'animated' : ''"
              :current-player-can-attack="game.canStartAFight(game.getCurrentPlayer(), player)"
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
            @open-player-inventory="openPlayerInventory"
            @move-to-sector="game.movePlayer($event)"
            @discover="game.discoverArea($event)"
            @apply-quest="game.applyQuest($event)"
            v-for="location in game.map.locations"/>
      </div>
    </div>
  </div>
</template>