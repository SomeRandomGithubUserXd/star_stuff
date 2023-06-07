<script setup lang="ts">
import {DialogOverlay, TransitionChild, TransitionRoot, Dialog} from "@headlessui/vue";
import WeaponCard from "@/components/Game/Items/WeaponCard.vue";
import {Tippy} from "vue-tippy";
import 'tippy.js/dist/tippy.css'
import ThrowableCard from "@/components/Game/Items/ThrowableCard.vue";
import CustomButton from "@/components/Main/CustomButton.vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {AbstractCharacter} from "@/game/AbstractCharacter";
import PlayerStatsExtended from "@/components/Game/Player/PlayerStatsExtended.vue";

const props = defineProps<{
  currentPlayerCanAttack: boolean,
  instance: AbstractCharacter,
  modelValue: boolean
}>()

const emit = defineEmits(['update:modelValue', 'attackCharacter'])

const requestFight = () => {
  emit('update:modelValue', false)
  emit('attackCharacter', props.instance)
}
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
            <div class="px-4 sm:p-6 bg-slate-700 text-white tracking-widest grid grid-cols-6 gap-4">
              <custom-button @click.prevent="requestFight" class="w-full click-sound col-span-6"
                             v-if="props.currentPlayerCanAttack"
                             :style="{backgroundColor: 'red !important'}">
                <font-awesome-icon class="mr-2" icon="fa-solid fa-cloud-bolt"/>
                Атаковать
              </custom-button>
              <div class="flex flex-col col-span-6">
                <player-stats-extended :instance="props.instance"/>
              </div>
              <div class="col-span-6 sm:col-span-6 flex flex-col mt-3">
                <h1 class="w-full text-base mb-1 text-center">
                  {{ props.instance.getMainWeapon().getName() }}
                </h1>
                <div class="flex items-center">
                  <font-awesome-icon class="text-indigo-500 mr-2" icon="fas fa-eye"/>
                  <span class="text-indigo-300">+{{ props.instance.getMainWeapon().addsPossibleRange() }} секторов</span>
                </div>
                <div class="flex items-center">
                  <font-awesome-icon class="text-red-600 mr-2" icon="fas fa-bolt"/>
                  <span class="text-red-600">+{{ props.instance.getMainWeapon().addsPossibleDamage() }} ед.</span>
                </div>
                <weapon-card class="h-20 mt-2" :instance="props.instance.getMainWeapon()"/>
              </div>
            <div class="flex flex-col mt-5 col-span-3">
              <div class="flex items-center">
                <div class="flex flex-col mr-2">
                  <h1 class="text-center w-full font-bold text-xl mb-3">
                    Напарник
                  </h1>
                </div>
                <div class="ml-5 mt-auto w-full flex flex-col">
                </div>
              </div>
            </div>
            <div class="col-span-3 sm:col-span-3 flex flex-col items-end">
              <h1 class="font-bold text-xl mb-3">
                Метательное
              </h1>
              <div>
                <div class="transition-all flex flex-wrap gap-2">
                  <tippy :content="throwable.getName" v-for="throwable in props.instance.getInventoryInstance().getThrowables()">
                    <throwable-card :instance="throwable"/>
                  </tippy>
                </div>
              </div>
            </div>
          </div>
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>