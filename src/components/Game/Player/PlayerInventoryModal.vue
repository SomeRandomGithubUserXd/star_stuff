<script setup lang="ts">
import {PlayerInventory} from "@/game/Player/PlayerInventory";
import {DialogOverlay, TransitionChild, TransitionRoot, Dialog} from "@headlessui/vue";

const props = defineProps<{
  instance: PlayerInventory,
  modelValue: boolean
}>()

</script>

<template>
  <TransitionRoot as="template" :show="modelValue">
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
              class="inline-block align-bottom rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div class="px-4 pb-4 sm:p-6 sm:pb-4 bg-slate-700 text-white tracking-widest">
              <div class="flex flex-col">
                <div class="text-center w-full z-10">
                  {{props.instance.getItems()}}
                </div>
              </div>
            </div>
          </form>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>