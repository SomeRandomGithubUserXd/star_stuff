<script setup lang="ts">
import {AbstractMainWeapon} from "@/game/Items/Weapons/AbstractMainWeapon";
import {ItemRarityEnum} from "@/game/Enums/ItemRarityEnum";
import ItemModal from "@/components/Game/Items/ItemModal.vue";
import {ref} from "vue";

const props = defineProps<{
  instance: AbstractMainWeapon
}>()

const showModal = ref(false)
</script>

<template>
  <div @click="showModal = true"
       class="flex needs-glowing click-sound items-center w-full cursor-pointer rounded border-2 border-solid p-2 shadow"
       :style="{borderColor: ItemRarityEnum.getColors(props.instance.getRarityLevel())[0]}">
    <item-modal :item="props.instance" v-model="showModal"/>
    <div class="w-full h-full"
         style="background-size: contain !important;background-repeat: no-repeat;background-position: center"
         :style="{borderColor: ItemRarityEnum.getColors(props.instance.getRarityLevel())[0], backgroundImage: `url(${props.instance.getImage()})`}">
    </div>
  </div>
</template>