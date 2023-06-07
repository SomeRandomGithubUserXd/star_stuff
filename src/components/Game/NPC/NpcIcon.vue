<script setup lang="ts">
import {Tippy} from "vue-tippy";
import 'tippy.js/dist/tippy.css'
import {AbstractNPC} from "@/game/NPC/AbstractNPC";
import NpcModal from "@/components/Game/NPC/NpcModal.vue";
import {ref} from "vue";
import CharacterModal from "@/components/Game/CharacterModal.vue";

const props = defineProps<{
  instance: AbstractNPC,
  currentPlayerCanAttack: boolean
}>()

const triggerModal = () => {
  const audio = new Audio(require('@/assets/audio/sfx/click.mp3'));
  audio.play();
  showModal.value = true
}

const showModal = ref(false)
</script>

<template>
  <tippy class="z-10" :content="props.instance.name">
    <character-modal :instance="props.instance" v-model="showModal" :current-player-can-attack="currentPlayerCanAttack"/>
    <div class="hover:scale-125 transition-all flex items-center flex-col" @click.stop="triggerModal">
      <div class="w-full bg-gray-200 rounded-full h-1.5 mb-1"
           style="min-width: 50px">
        <div class="bg-red-600 h-1.5 rounded-full transition-all"
             :style="{width: `${props.instance.getHealth()}%`}"></div>
      </div>
      <div class="w-10 h-10 rounded-full p-1 rounded-full bg-black bg-cover bg-center"
           :style="{backgroundImage: `url(${props.instance.getCharacter().icon})`}"/>
    </div>
  </tippy>
</template>