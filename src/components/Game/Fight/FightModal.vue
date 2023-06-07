<script setup lang="ts">
import {computed, ref} from "vue";
import {Dialog, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot} from '@headlessui/vue'
import {Game} from "@/game/Game";
import FightSide from "@/components/Game/Fight/FightSide.vue";

const props = defineProps<{
  game: Game,
}>()

const fight = computed({
  get() {
    return props.game.getActiveFight()
  }, set() {
  }
})

const showModal = computed({
  get() {
    return !!fight.value
  }, set() {
  }
})
</script>

<template>
  <div>
    <TransitionRoot as="template" :show="showModal">
      <Dialog as="div" class="fixed z-10 inset-0 overflow-y-auto">
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
                class="inline-block align-bottom rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-6xl sm:w-full">
              <div class="px-4 pt-5 pb-4 sm:p-6 sm:pb-4 bg-slate-700 text-white tracking-widest w-full flex gap-10">
                <template v-if="fight?.attackingCharacter">
                  <div class="w-1/2">
                    <fight-side
                        @shot="fight.registerShot()"
                        :is-current="fight.currentCharacter === fight.attackingCharacter"
                        :instance="fight.attackingCharacter"/>
                  </div>
                </template>
                <template v-if="fight?.defendingCharacter">
                  <div class="w-1/2">
                    <fight-side
                        @shot="fight.registerShot()"
                        :is-current="fight.currentCharacter === fight.defendingCharacter"
                        :reversed="true"
                        :instance="fight.defendingCharacter"/>
                  </div>
                </template>
              </div>
            </form>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>