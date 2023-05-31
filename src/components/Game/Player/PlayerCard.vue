<script setup lang="ts">
import {Player} from "@/game/Player/Player";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import WeaponCard from "@/components/Game/Items/WeaponCard.vue";
import {Tippy} from "vue-tippy";
import 'tippy.js/dist/tippy.css'
import PlayerInventoryModal from "@/components/Game/Player/PlayerInventoryModal.vue";
import {ref} from "vue";

const props = defineProps<{
  instance: Player,
  isCompact: false,
}>()

const showInventory = ref(false)
</script>

<template>
  <div class="needs-glowing select-none text-white flex items-end">
    <player-inventory-modal :instance="props.instance.getInventoryInstance()" v-model="showInventory"/>
    <img class="auto-img" style="max-width: 90px !important;" :src="props.instance.side.character.icon">
    <div class="flex px-4 h-full w-full gap-3" v-if="props.isCompact">
      <div class="flex flex-col">
        <div class="flex">
          <h1 class="font-bold overflow-hidden whitespace-nowrap overflow-ellipsis">
            {{
              props.instance.name
            }}
          </h1>
        </div>
        <div class="flex justify-between gap-3">
          <div class="flex flex-col justify-start">
            <div class="flex flex-col ml-auto cursor-help">
              <tippy :content="`Осталось ходов: ${props.instance.movesLeft}`">
                <div class="cursor-help">
                    <span class="font-bold">
                      <font-awesome-icon class="text-white" icon="fas fa-arrows-up-down-left-right"/>
                      {{ props.instance.movesLeft }}
                    </span>
                </div>
              </tippy>
              <tippy class="z-10" :content="`Дальнобойность: ${props.instance.getRange()} локаций`">
                <div>
                    <span class="font-bold">
                      <font-awesome-icon class="text-indigo-500" icon="fas fa-eye"/>
                      {{ props.instance.getRange() }}
                    </span>
                </div>
              </tippy>
            </div>
          </div>
          <div class="flex flex-col justify-start">
            <div class="flex flex-col ml-auto cursor-help">
              <tippy class="z-10" :content="`Возможно нанести: ${props.instance.getDamagePossible()} урона`">
                <div class="cursor-help">

                    <span class="font-bold">
                      <font-awesome-icon class="text-red-600" icon="fas fa-bolt"/>
                      {{ props.instance.getDamagePossible() }}
                    </span>
                </div>
              </tippy>
              <tippy class="z-10" :content="`Шанс уворота: ${props.instance.getRange()}% / 99%`">
                <div class="cursor-help">

                    <span class="font-bold">
                      <font-awesome-icon class="text-green-600" icon="fas fa-shield"/>
                      {{ props.instance.getDodgeChange() }}
                    </span>
                </div>
              </tippy>
            </div>
          </div>
          <div>
            <tippy class="z-10" :content="`Здоровье: ${props.instance.getHealth()}% / 100%`">
              <div class="flex items-center cursor-help overflow-hidden">
                <h3 class="mr-2 whitespace-nowrap font-bold">
                  {{ props.instance.getHealth() }}
                  <font-awesome-icon class="text-red-600" icon="fas fa-heart"/>
                </h3>
                <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700"
                     style="min-width: 70px">
                  <div class="bg-red-600 h-2.5 rounded-full transition-all"
                       :style="{width: `${props.instance.getHealth()}%`}"></div>
                </div>
              </div>
            </tippy>
            <tippy class="z-10" :content="`Опыт: ${props.instance.getTotalExp()} ед.`">
              <div class="flex items-center cursor-help overflow-hidden">
                <h3 class="mr-2 whitespace-nowrap font-bold">
                  {{ props.instance.getLevel() }}
                  <font-awesome-icon class="text-indigo-500" icon="fas fa-jedi"/>
                </h3>
                <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700"
                     style="min-width: 70px">
                  <div class="bg-blue-600 h-2.5 rounded-full dark:bg-indigo-500 transition-all"
                       :style="{width: `${props.instance.getLevelProgress()}%`}"></div>
                </div>
              </div>
            </tippy>
          </div>
        </div>
      </div>
      <div class="flex gap-3 h-full flex-grow">
        <div class="flex items-center h-full py-2 w-full">
          <template v-if="props.instance.getMainWeapon()">
            <tippy class="w-full h-full" :content="props.instance.getMainWeapon().getName">
              <weapon-card :instance="props.instance.getMainWeapon()"/>
            </tippy>
          </template>
        </div>
        <div class="flex items-center py-2 h-full w-full">
          <tippy class="w-full h-full" content="Инвентарь">
            <div
                @click.prevent="showInventory = true"
                class="flex click-sound items-center w-full h-full cursor-pointer rounded border-2 border-solid p-2 shadow border-green-500 w-full text-2xl items-center justify-center">
              <font-awesome-icon icon="fa-solid fa-toolbox"/>
            </div>
          </tippy>
        </div>
      </div>
    </div>
    <div class="p-2 w-full" v-else>
      <h1 class="font-bold w-1/2 overflow-hidden whitespace-nowrap overflow-ellipsis">{{ props.instance.name }}</h1>
      <div class="mt-1 flex items-center">
        <h3 class="mr-3 whitespace-nowrap">{{ props.instance.getHealth() }} HP</h3>
        <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div class="bg-red-600 h-2.5 rounded-full"
               :style="{width: `${props.instance.getHealth()}%`}"></div>
        </div>
      </div>
      <div class="mt-1 flex items-center">
        <h3 class="mr-3 whitespace-nowrap">{{ Math.floor(props.instance.getTotalExp() / 1000) }} LVL</h3>
        <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div class="bg-blue-600 h-2.5 rounded-full dark:bg-indigo-500"
               :style="{width: `${(props.instance.getTotalExp() / 10) - (Math.floor(props.instance.getTotalExp() / 1000) * 100)}%`}"></div>
        </div>
      </div>
    </div>
  </div>
</template>