<script setup lang="ts">
import {AbstractLocation} from "@/game/Locations/AbstractLocation";
import {Player} from "@/game/Player/Player";
import {computed, onMounted, ref, watch} from "vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import PlayerIcon from "@/components/Game/Player/PlayerIcon.vue";
import {Game} from "@/game/Game";
import {Tippy} from "vue-tippy";
import 'tippy.js/dist/tippy.css'
import VueSimpleContextMenu from 'vue-simple-context-menu/src/vue-simple-context-menu.vue'
import "font-awesome/css/font-awesome.css"
import {AbstractSector} from "@/game/Locations/AbstractSector";
import EventIcon from "@/components/Game/Location/EventIcon.vue";

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

const emit = defineEmits(['moveToSector', 'discover', 'applyQuest'])

const ctxMenus = ref(null)

function handleClick(event: any, item: any, index: number) {
  for (const menu of ctxMenus.value) {
    menu.hideContextMenu()
  }
  ctxMenus.value[index].showMenu(event, item)
}


function optionClicked(event: any) {
  event.option.callback()
}

const getOptionsForSector = (sector: AbstractSector, key: number) => {
  return [
    {
      name: `<i class="fa fa-question-circle mr-2"></i>Взять квест (${sector.quests.length})`,
      class: sector.quests.length ? '' : 'disabled',
      callback: () => {
        if (!sector.quests.length) return
        emit('applyQuest', [sector.location.id, key, sector.quests[0]])
      }
    }
  ]
}
</script>

<template>
  <div class="border border-solid border-white location">
    <tippy :content="location.isDiscovered ? location.getName() : '??????'">
      <div v-if="location.isDiscovered" class="content" :style="{background: `url(${location.getBackgroundImage()})`}">
        <div
            @contextmenu.prevent.stop="handleClick($event, sector, key)"
            @click="emit('moveToSector', [key, props.instance.id])"
            class="border p-1 flex flex-col border-solid sector border-gray-400 flex overflow-hidden"
            v-for="(sector, key) in location.sectors">
          <vue-simple-context-menu
              :element-id="props.instance.id + '-' + key"
              :options="getOptionsForSector(sector, key)"
              ref="ctxMenus"
              @option-clicked="optionClicked"
          />
          <div class="flex">
            <event-icon
                v-if="sector.quests.length"
                icon="fas fa-question-circle"/>
          </div>
          <div class="flex gap-1">
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
      </div>
      <div v-else class="undiscovered" @click="emit('discover', props.instance.id)">
        <font-awesome-icon class="icon-lock" icon="fas fa-lock"/>
      </div>
    </tippy>
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
    background-size: cover !important;
    background-position: center !important;
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