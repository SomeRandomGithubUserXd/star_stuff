<script setup lang="ts">
import {camelize, computed, ref} from "vue";
import {AbstractQuest} from "@/game/Quests/AbstractQuest";
import {Dialog, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot} from '@headlessui/vue'
import CustomButton from "@/components/Main/CustomButton.vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import QuestCompletedModal from "@/components/Game/Quests/QuestCompletedModal.vue";
import {QuestOption} from "@/game/Quests/QuestOption";
import {Player} from "@/game/Player/Player";
import {Game} from "@/game/Game";

const props = defineProps<{
  game: Game,
}>()

const quest = computed({
  get() {
    return props.game.getActiveQuest()
  }, set() {
  }
})

const showModal = computed({
  get() {
    return !!quest.value
  }, set() {
  }
})

const modalConsequence = ref(null)

const showCompletedModal = ref(false)

const selectOption = (option: QuestOption) => {
  props.game.selectOption(option).then((result) => {
    modalConsequence.value = result
    showCompletedModal.value = true
  })
}
</script>

<template>
  <div>
    <template v-if="modalConsequence">
      <quest-completed-modal
          :instance="modalConsequence"
          v-model="showCompletedModal"/>
    </template>
    <TransitionRoot as="template" :show="showModal">
      <Dialog as="div" class="fixed z-10 inset-0 overflow-y-auto">
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
                class="inline-block align-bottom rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div
                  class="p-2 text-center bg-slate-800">
                <h1 class="font-bold text-xl text-white">
                  {{ quest?.getTitle() }}
                </h1>
              </div>
              <div class="px-4 pt-5 pb-4 sm:p-6 sm:pb-4 bg-slate-700 text-white tracking-widest">
                <div class="flex flex-col">
                  <div class="text-center w-full z-10">
                    <div>
                      <img class="auto-img rounded-md" :src="quest?.getImage()"/>
                    </div>
                    <p
                        class="mt-5"
                        style="text-shadow: 0 0 10px rgba(0,0,0,0.5)"
                        v-html="quest?.getText()"/>
                  </div>
                </div>
              </div>
              <div class="bg-slate-800 px-4 py-3 sm:px-6 flex flex-col gap-3">
                <custom-button class="w-full click-sound"
                               type="button"
                               @click.prevent="selectOption(option)"
                               :style="{backgroundColor: option.colorScheme[0] + ' !important', color: option.colorScheme[1]}"
                               v-for="option in quest?.getOptions() || []">
                  <font-awesome-icon class="mr-2" :icon="`fa-solid fa-${option.icon.iconName}`"/>
                  {{ option.name }}
                  <span class="text-base border-l-white pl-2 ml-1 border-solid border-l-2" v-if="option.requiresLvl">
                    <font-awesome-icon class="mr-1" :icon="`fa-solid fa-jedi`"/>
                    {{ option.requiresLvl }}
                  </span>
                </custom-button>
              </div>
            </form>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>