<script setup lang="ts">
import {AbstractLocation} from "@/game/Locations/AbstractLocation";
import {Player} from "@/game/Player";
import {computed, onMounted, ref, watch} from "vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import PlayerIcon from "@/components/Game/PlayerIcon.vue";
import {Game} from "@/game/Game";

const props = defineProps<{
  instance: AbstractLocation,
  players: Player[],
  game: Game
}>()

const location = ref(props.instance)

const activePlayers = ref([])

watch(() => props.players, value => {
  refreshActivePlayers()
}, {deep: true})

const refreshActivePlayers = () => {
  const players = []
  for (const player of props.players) {
    if (player.currentLocation == props.instance.id) players.push(player)
  }
  if (players.length) location.value.isDiscovered = true
  activePlayers.value = players
}

onMounted(() => {
  refreshActivePlayers()
})

const emit = defineEmits(['moveToSector', 'discover'])
</script>

<template>
  <div class="border border-solid border-white location">
    <div v-if="location.isDiscovered" class="content">
      <div
          @click="emit('moveToSector', [key, props.instance.id])"
          class="border border-solid sector border-gray-400 p-1 flex overflow-hidden gap-3"
          v-for="(sector, key) in location.getSectors()">
        <template v-if="activePlayers.length">
          <template v-for="player of activePlayers">
            <player-icon
                :is-current="props.game.currentPlayerIndex === player.id"
                :instance="player"
                v-if="player.currentSector === key"/>
          </template>
        </template>
      </div>
    </div>
    <div v-else class="undiscovered" @click="emit('discover', props.instance.id)">
      <font-awesome-icon class="icon-lock" icon="fas fa-lock"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
* {
  transition: all .7s;
}

.location {
  cursor: pointer;
  transition: .8s all;

  .content {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;

    .sector {
      width: 50%;
      height: 50%;
      background: rgba(0, 0, 0, 0.3);

      &:hover {
        background: rgba(0, 0, 0, 0);
      }
    }
  }

  .undiscovered {
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 100%;

    &:hover .icon-lock {
      color: white;
    }

    .icon-lock {
      transition: .7s all;
      color: gray;
      font-size: 3rem;
    }
  }
}
</style>