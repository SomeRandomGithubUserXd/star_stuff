<script setup lang="ts">
import {AbstractMainWeapon} from "@/game/Items/Weapons/AbstractMainWeapon";
import {ItemRarityEnum} from "@/game/Enums/ItemRarityEnum";
import ItemModal from "@/components/Game/Items/ItemModal.vue";
import {ref} from "vue";

const props = withDefaults(defineProps<{
  instance: AbstractMainWeapon,
  modalOnClick: boolean
}>(), {
  modalOnClick: true
})

const showModal = ref(false)

const triggerModal = () => {
  if (!props.modalOnClick) return
  showModal.value = true
}
</script>

<template>
  <div @click="triggerModal"
       class="flex needs-glowing click-sound items-center w-full cursor-pointer rounded border-2 border-solid p-2 shadow"
       :style="{borderColor: ItemRarityEnum.getColors(props.instance.getRarityLevel())[0]}">
    <item-modal :item="props.instance" v-model="showModal"/>
    <div class="w-full h-full"
         style="background-size: contain !important;background-repeat: no-repeat;background-position: center"
         :style="{borderColor: ItemRarityEnum.getColors(props.instance.getRarityLevel())[0], backgroundImage: `url(${props.instance.getImage()})`}">
    </div>
  </div>
</template>