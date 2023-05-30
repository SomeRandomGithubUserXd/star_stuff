<script setup lang="ts">
import {Dialog, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot} from '@headlessui/vue'
import {ExclamationCircleIcon} from '@heroicons/vue/24/outline'
import {Player} from "@/game/Player/Player";
import {Side} from "@/game/Sides/Side";
import {ref, watch} from "vue";
import InputField from "@/components/Main/InputField.vue";
import CustomButton from "@/components/Main/CustomButton.vue";
import {Toast} from '@/traits/SwalTrait.js'

const props = defineProps<{
  modelValue: boolean,
  side: Side
}>()

const emit = defineEmits(['update:modelValue', 'storePlayer'])
const name = ref('')

const storePlayer = () => {
  if (!name.value) {
    Toast.fire({
      icon: 'error',
      title: `Заполните имя`,
      timer: 1000
    })
    return
  }
  emit('update:modelValue', false)
  emit('storePlayer', new Player(0, props.side, name.value))
  Toast.fire({
    icon: 'success',
    title: `<span class="text-indigo-600">${name.value}</span> играет за <span style="color: ${props.side.getColor()}">${props.side.getName}</span>!`,
    timer: 2500
  })
  name.value = ''
}
</script>

<template>
  <TransitionRoot as="template" :show="props.modelValue">
    <Dialog as="div" class="fixed z-10 inset-0 overflow-y-auto" @close="emit('update:modelValue', false)">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
                         leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <DialogOverlay class="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity"/>
        </TransitionChild>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <TransitionChild as="template" enter="ease-out duration-300"
                         enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                         enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
                         leave-from="opacity-100 translate-y-0 sm:scale-100"
                         leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
          <form
              @submit.prevent="storePlayer"
              class="inline-block align-bottom rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div class="bg-slate-700 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div class="flex flex-col select-none">
                <div class="mt-3 text-center w-full z-10">
                  <DialogTitle as="h3"
                               class="flex flex-col items-center text-lg leading-6 font-medium text-white text-center">
                    <h1 v-if="name" class="font-bold overflow-hidden whitespace-nowrap overflow-ellipsis mb-3">{{
                        name
                      }}</h1>
                    <div class="needs-glowing pt-5 px-3 my-2">
                      <img width="70" :src="props.side.character.icon">
                    </div>
                  </DialogTitle>
                  <div class="mt-2 w-full z-0">
                    <input-field name="Имя игрока" class="" v-model="name"/>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-slate-800 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <custom-button class="w-full click-sound">
                <font-awesome-icon class="mr-2" icon="fa-solid fa-user-check"/>
                Добавить игрока
              </custom-button>
            </div>
          </form>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>