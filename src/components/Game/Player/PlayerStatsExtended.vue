<script lang="ts" setup>
import {AbstractCharacter} from "@/game/AbstractCharacter";

const props = withDefaults(defineProps<{
  instance: AbstractCharacter,
  reversed: boolean,
  animated: boolean,
}>(), {
  reversed: false,
  animated: true
})
</script>

<template>
  <div class="flex items-end gap-7" :class="{'flex-row-reverse': props.reversed}">
    <div class="flex flex-col">
      <div class="transition-all z-10">
        <div style="width: 75px;height: 75px"
             class="rounded-full p-1 needs-glowing rounded-glowing" :class="{animated: props.animated}">
          <img class="auto-img rounded-full" :src="props.instance.getCharacter().icon"/>
        </div>
        <h1 class="text-center w-full font-bold text-xl mt-3">
          {{ props.instance.name }}
        </h1>
      </div>
    </div>
    <div class="mt-auto w-full flex flex-col">
      <div class="mb-1 flex flex-wrap w-full">
        <div class="flex flex-col justify-start w-full mb-3">
          <div class="flex flex-col ml-auto w-full gap-1">
            <div class="flex items-center">
              <font-awesome-icon class="text-white mr-2" icon="fas fa-arrows-up-down-left-right"/>
              <span class="text-sm font-medium mr-1">Осталось ходов</span>
              <span class="ml-auto text-white">{{ props.instance.movesLeft }}</span>
            </div>
            <div class="flex items-center">
              <font-awesome-icon class="text-indigo-500 mr-2" icon="fas fa-eye"/>
              <span class="text-sm font-medium mr-1">Дальнобойность</span>
              <span class="ml-auto text-indigo-300">{{ props.instance.getRange() }} секторов</span>
            </div>
            <div class="flex items-center">
              <font-awesome-icon class="text-red-600 mr-2" icon="fas fa-bolt"/>
              <span class="text-sm font-medium mr-1">Атака</span>
              <span class="ml-auto text-red-600">{{ props.instance.getDamagePossible() }} ед.</span>
            </div>
            <div class="flex items-center">
              <font-awesome-icon class="text-green-600 mr-2" icon="fas fa-shield"/>
              <span class="text-sm font-medium mr-1">Уворот</span>
              <span class="ml-auto text-green-600">{{ props.instance.getDodgeChange() }} %</span>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center overflow-hidden">
        <h3 class="mr-2 whitespace-nowrap font-bold">
          {{ props.instance.getHealth() }}
          <font-awesome-icon class="text-red-600" icon="fas fa-heart"/>
        </h3>
        <div class="w-full bg-gray-200 rounded-full h-2.5 w-full"
             style="min-width: 70px">
          <div class="bg-red-600 h-2.5 rounded-full transition-all"
               :style="{width: `${props.instance.getHealth()}%`}"></div>
        </div>
      </div>
      <div class="flex items-center overflow-hidden">
        <h3 class="mr-2 whitespace-nowrap font-bold">
          {{ props.instance.getLevel() }}
          <font-awesome-icon class="text-indigo-500" icon="fas fa-jedi"/>
        </h3>
        <div class="w-full bg-gray-200 rounded-full h-2.5"
             style="min-width: 70px">
          <div class="bg-blue-600 h-2.5 rounded-full transition-all"
               :style="{width: `${props.instance.getLevelProgress()}%`}"></div>
        </div>
      </div>
    </div>
  </div>
</template>