<script setup lang="ts">
import {Dialog, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot} from '@headlessui/vue'
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {QuestOption} from "@/game/Quests/QuestOption";
import AnimatedCount from "@/components/Main/AnimatedCount.vue";

const props = defineProps<{
  instance: QuestOption,
  modelValue: boolean,
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
                :style="{background: props.instance.colorScheme[0], color: props.instance.colorScheme[1]}"
                class="p-2 text-center">
              <h1 class="font-bold text-xl"
                  :style="{color: props.instance.colorScheme[1]}">
                <font-awesome-icon class="mr-2" :icon="`fa-solid fa-${props.instance.icon.iconName}`"/>
                {{ props.instance.name }}
              </h1>
            </div>
            <div class="px-4 pt-5 pb-4 sm:p-6 sm:pb-4 bg-slate-700 text-white tracking-widest">
              <div class="flex flex-col">
                <div class="text-center w-full z-10">
                  <div>
                    <img class="auto-img rounded-md" :src="props.instance.consequence.image"/>
                  </div>
                  <p
                      class="mt-5" v-html="props.instance.consequence.description"/>
                  <div class="flex flex-wrap gap-12 mt-5 justify-center">
                    <div class="flex items-center text-xl text-red-500 animate__animated animate__fadeIn">
                      <font-awesome-icon icon="fa-solid fa-heart" class="mr-2"/>
                      <animated-count
                          :from="props.instance.consequence.quest.getAssignedPlayer().health"
                          :to="props.instance.consequence.healthManipulation(props.instance.consequence.quest.getAssignedPlayer())"/>
                    </div>
                    <div class="flex items-center text-xl text-indigo-500 animate__animated animate__fadeIn animate__delay-1s">
                      <font-awesome-icon icon="fa-solid fa-jedi" class="mr-2"/>
                      <animated-count
                          class="mr-3 font-bold"
                          :delay="1"
                          :from="(Math.floor(props.instance.consequence.quest.getAssignedPlayer().totalExp / 1000))"
                          :to="(Math.floor(props.instance.consequence.expManipulation(props.instance.consequence.quest.getAssignedPlayer()) / 1000))"/>
                      <span>&nbsp;-&nbsp;</span>
                      <animated-count
                          :delay="1"
                          :from="props.instance.consequence.quest.getAssignedPlayer().totalExp"
                          :to="props.instance.consequence.expManipulation(props.instance.consequence.quest.getAssignedPlayer())"/>
                      <span>&nbsp;ед.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>