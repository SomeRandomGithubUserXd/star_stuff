<script setup lang="ts">
import {Tippy} from "vue-tippy";
import 'tippy.js/dist/tippy.css'
import {NPC} from "@/game/NPC";

const props = defineProps<{
  instance: NPC
}>()
</script>

<template>
  <tippy class="z-10" :content="props.instance.name">
    <div class="transition-all">
      <div class="w-10 h-10 rounded-full p-1 rounded-full bg-black">
        <img class="auto-img rounded-full" :src="props.instance.icon"/>
      </div>
    </div>
  </tippy>
</template>