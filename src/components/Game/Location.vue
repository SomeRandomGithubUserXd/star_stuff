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
import collect from "collect.js"
import {AbstractNPC} from "@/game/NPC/AbstractNPC";
import NpcIcon from "@/components/Game/NPC/NpcIcon.vue";

const props = defineProps<{
  instance: AbstractLocation,
  players: Player[],
  game: Game
}>()

const location = ref(props.instance)

const emit = defineEmits(['moveToSector', 'discover', 'applyQuest', 'openPlayerInventory'])

const ctxMenus = ref(null)

function handleClick(event: any, item: any) {
  for (const menu of ctxMenus.value) {
    menu.hideContextMenu()
  }
  collect(ctxMenus.value).where('elementId', '==', 'sector-menu-' + item.id).first().showMenu(event, item)
}

function optionClicked(event: any) {
  event.option.callback()
}

const getOptionsForSector = (sector: AbstractSector) => {
  return [
    {
      name: `<i class="fa fa-question-circle mr-2"></i>Взять квест (${sector.quests.length})`,
      class: sector.quests.length ? '' : 'disabled',
      callback: () => {
        if (!sector.quests.length) return
        emit('applyQuest', sector)
      }
    }
  ]
}

onMounted(() => {
  for (const sector of props.instance.sectors) {
    for (const character of sector.getCharacters()) {
      if (character instanceof Player) props.instance.isDiscovered = true
    }
  }
})
</script>

<template>
  <div class="location border border-solid border-gray-500">
    <tippy :content="location.isDiscovered ? location.getName() : '??????'">
      <div v-if="location.isDiscovered" class="content" :style="{background: `url(${location.getBackgroundImage()})`}">
        <div
            @contextmenu.prevent.stop="handleClick($event, sector)"
            @click="emit('moveToSector', sector)"
            class="p-1 flex flex-col sector flex overflow-hidden hover:scale-95"
            v-for="sector in location.sectors">
          <vue-simple-context-menu
              :element-id="'sector-menu-' + sector.id"
              :options="getOptionsForSector(sector, sector.id)"
              ref="ctxMenus"
              @option-clicked="optionClicked"/>
          <div class="flex">
            <event-icon
                v-if="sector.quests.length"
                icon="fas fa-question-circle"/>
            <div class="ml-auto text-sm text-green-600">
              <span class="mr-0.5" style="text-shadow: 0 0 10px rgba(255,255,255,0.4) !important;">
              +{{ sector.dodgeChanceIncrement }}
              </span>
              <font-awesome-icon icon="fas fa-shield"/>
            </div>
          </div>
          <div class="flex gap-1">
            <template v-for="character of sector.getCharacters()">
              <template v-if="character instanceof Player">
                <player-icon
                    @open-player-inventory="emit('openPlayerInventory', $event)"
                    :is-current="props.game.getCurrentPlayer().id === character.id"
                    :instance="character"/>
              </template>
              <template v-if="character instanceof AbstractNPC">
                <npc-icon :instance="character" :current-player-can-attack="game.canStartAFight(props.game.getCurrentPlayer(), character)"/>
              </template>
            </template>
          </div>
        </div>
      </div>
      <div v-else class="undiscovered" @click="emit('discover', props.instance)">
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
      background: rgba(0, 0, 0, 0.2);
      transition: .2s all;

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