<script setup lang="ts">
import {Player} from "@/game/Player";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const props = defineProps<{
  instance: Player,
  isCompact: false,
}>()
</script>

<template>
  <div class="needs-glowing select-none text-white flex items-end">
    <img class="auto-img" style="max-width: 90px !important;" :src="props.instance.side.character.icon">
    <div class="w-full flex" v-if="props.isCompact">
      <div class="mt-1 flex items-center ml-3">
        <div class="flex flex-col">
          <h1 class="font-bold text-center overflow-hidden whitespace-nowrap overflow-ellipsis">{{
              props.instance.name
            }}</h1>
          <div>
            <div class=" flex items-center">
              <h3 class="mr-2 whitespace-nowrap font-bold">
                {{ props.instance.health }}
                <font-awesome-icon class="text-red-600" icon="fas fa-heart"/>
              </h3>
              <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700"
                   style="min-width: 70px">
                <div class="bg-red-600 h-2.5 rounded-full transition-all"
                     :style="{width: `${props.instance.health}%`}"></div>
              </div>
            </div>
            <div class=" flex items-center">
              <h3 class="mr-2 whitespace-nowrap font-bold">
                {{ Math.floor(props.instance.totalExp / 1000) }}
                <font-awesome-icon class="text-indigo-500" icon="fas fa-jedi"/>
              </h3>
              <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700"
                   style="min-width: 70px">
                <div class="bg-blue-600 h-2.5 rounded-full dark:bg-indigo-500 transition-all"
                     :style="{width: `${(props.instance.totalExp / 10) - (Math.floor(props.instance.totalExp / 1000) * 100)}%`}"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="p-2 w-full" v-else>
      <h1 class="font-bold w-1/2 overflow-hidden whitespace-nowrap overflow-ellipsis">{{ props.instance.name }}</h1>
      <div class="mt-1 flex items-center">
        <h3 class="mr-3 whitespace-nowrap">{{ props.instance.health }} HP</h3>
        <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div class="bg-red-600 h-2.5 rounded-full"
               :style="{width: `${props.instance.health}%`}"></div>
        </div>
      </div>
      <div class="mt-1 flex items-center">
        <h3 class="mr-3 whitespace-nowrap">{{ Math.floor(props.instance.totalExp / 1000) }} LVL</h3>
        <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div class="bg-blue-600 h-2.5 rounded-full dark:bg-indigo-500"
               :style="{width: `${(props.instance.totalExp / 10) - (Math.floor(props.instance.totalExp / 1000) * 100)}%`}"></div>
        </div>
      </div>
    </div>
  </div>
</template>