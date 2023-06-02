<script setup lang="ts">
import {PlayerInventory} from "@/game/Player/PlayerInventory";
import {DialogOverlay, TransitionChild, TransitionRoot, Dialog} from "@headlessui/vue";
import {Player} from "@/game/Player/Player";
import WeaponCard from "@/components/Game/Items/WeaponCard.vue";
import {Tippy} from "vue-tippy";
import 'tippy.js/dist/tippy.css'

const props = defineProps<{
  player: Player,
  modelValue: boolean
}>()

const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <TransitionRoot as="template" :show="modelValue">
    <Dialog as="div" class="fixed z-10 inset-0 overflow-y-auto" @close="emit('update:modelValue', false)">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
                         leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <DialogOverlay class="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity"/>
        </TransitionChild>
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <TransitionChild as="template" enter="ease-out duration-300"
                         enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                         enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
                         leave-from="opacity-100 translate-y-0 sm:scale-100"
                         leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
          <div
              class="inline-block align-bottom rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div class="px-4 sm:p-6 bg-slate-700 text-white tracking-widest">
              <div class="flex flex-col">
                <div class="flex items-center">
                  <div class="flex flex-col mr-2">
                    <h1 class="text-center w-full font-bold text-xl mb-3">
                      {{ props.player.name }}
                    </h1>
                    <div class="transition-all z-10">
                      <div style="width: 75px;height: 75px"
                           class="rounded-full p-1 animated needs-glowing rounded-glowing">
                        <img class="auto-img rounded-full" :src="props.player.side.character.icon"/>
                      </div>
                    </div>
                  </div>
                  <div class="ml-5 mt-auto w-full flex flex-col">
                    <div class="mb-1 flex flex-wrap w-full">
                      <div class="flex flex-col justify-start w-full mb-3">
                        <div class="flex flex-col ml-auto w-full gap-1">
                          <div class="flex items-center w-full">
                            <font-awesome-icon class="text-white mr-2" icon="fas fa-arrows-up-down-left-right"/>
                            <span class="text-sm font-medium mr-1 text-center">Осталось ходов</span>
                            <span class="ml-auto">{{ props.player.movesLeft }}</span>
                          </div>
                          <div class="flex items-center">
                            <font-awesome-icon class="text-indigo-500 mr-2" icon="fas fa-eye"/>
                            <span class="text-sm font-medium mr-1">Дальнобойность</span>
                            <span class="ml-auto text-indigo-300">{{ props.player.getRange() }} локаций</span>
                          </div>
                          <div class="flex items-center">
                            <font-awesome-icon class="text-red-600 mr-2" icon="fas fa-bolt"/>
                            <span class="text-sm font-medium mr-1">Атака</span>
                            <span class="ml-auto text-red-600">{{ props.player.getDamagePossible() }} ед.</span>
                          </div>
                          <div class="flex items-center">
                            <font-awesome-icon class="text-green-600 mr-2" icon="fas fa-shield"/>
                            <span class="text-sm font-medium mr-1">Уворот</span>
                            <span class="ml-auto text-green-600">{{ props.player.getDodgeChange() }} %</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="flex items-center overflow-hidden">
                      <h3 class="mr-2 whitespace-nowrap font-bold">
                        {{ props.player.getHealth() }}
                        <font-awesome-icon class="text-red-600" icon="fas fa-heart"/>
                      </h3>
                      <div class="w-full bg-gray-200 rounded-full h-2.5 w-full"
                           style="min-width: 70px">
                        <div class="bg-red-600 h-2.5 rounded-full transition-all"
                             :style="{width: `${props.player.getHealth()}%`}"></div>
                      </div>
                    </div>
                    <div class="flex items-center overflow-hidden">
                      <h3 class="mr-2 whitespace-nowrap font-bold">
                        {{ props.player.getLevel() }}
                        <font-awesome-icon class="text-indigo-500" icon="fas fa-jedi"/>
                      </h3>
                      <div class="w-full bg-gray-200 rounded-full h-2.5"
                           style="min-width: 70px">
                        <div class="bg-blue-600 h-2.5 rounded-full transition-all"
                             :style="{width: `${props.player.getLevelProgress()}%`}"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-6 gap-4 mt-5">
                <div class="col-span-6 sm:col-span-3 flex justify-center flex-col">
                  <h1 class="text-center w-full font-bold text-xl mb-3">
                    {{ props.player.getMainWeapon().name }}
                  </h1>
                  <weapon-card class="h-20 mb-3" :instance="props.player.getMainWeapon()"/>
                  <div class="flex items-center">
                    <font-awesome-icon class="text-indigo-500 mr-2" icon="fas fa-eye"/>
                    <span class="text-indigo-300">+{{ props.player.getMainWeapon().addsPossibleRange() }} локаций</span>
                  </div>
                  <div class="flex items-center">
                    <font-awesome-icon class="text-red-600 mr-2" icon="fas fa-bolt"/>
                    <span class="text-red-600">{{ props.player.getMainWeapon().addsPossibleDamage() }} ед.</span>
                  </div>
                </div>
                <div class="col-span-6 sm:col-span-3 flex justify-center">
                  sus
                </div>
              </div>
            </div>
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>