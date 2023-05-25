<script setup lang="ts">
import {Dialog, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot} from '@headlessui/vue'
import InputField from "@/components/Main/InputField.vue";
import CustomButton from "@/components/Main/CustomButton.vue";
import {AbstractItem} from "@/game/Items/AbstractItem";
import {ItemRarityEnum} from "@/game/Enums/ItemRarityEnum";

const props = defineProps<{
  modelValue: boolean,
  item: AbstractItem
}>()

const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <TransitionRoot as="template" :show="props.modelValue">
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
          <form
              @submit.prevent="emit('update:modelValue', false)"
              class="inline-block align-bottom rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div
                class="p-2 text-center"
                :style="{backgroundColor: ItemRarityEnum.getColors(item.getRarityLevel())[2]}">
              <h1 class="font-bold text-xl"
                  style="text-shadow: 0 0 10px rgba(0,0,0,0.5)"
                  :style="{color: ItemRarityEnum.getColors(item.getRarityLevel())[1]}">
                {{ ItemRarityEnum.getName(item.getRarityLevel()) }}
              </h1>
            </div>
            <div class="px-4 pt-5 pb-4 sm:p-6 sm:pb-4"
                 :style="{backgroundColor: ItemRarityEnum.getColors(item.getRarityLevel())[0]}">
              <div class="flex flex-col">
                <div class="text-center w-full z-10">
                  <DialogTitle as="h3"
                               style="text-shadow: 0 0 10px rgba(0,0,0,0.5)"
                               :style="{color: ItemRarityEnum.getColors(item.getRarityLevel())[1]}"
                               class="flex flex-col items-center text-lg leading-6 font-medium text-white text-center text-2xl mb-5">
                    {{props.item.getName()}}
                  </DialogTitle>
                  <div>
                    <img class="auto-img" :src="props.item.getImage()"/>
                  </div>
                  <p
                      class="mt-5"
                      style="text-shadow: 0 0 10px rgba(0,0,0,0.5)"
                      :style="{color: ItemRarityEnum.getColors(item.getRarityLevel())[1]}"
                      v-html="props.item.getDescription()"></p>
                </div>
              </div>
            </div>
          </form>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>