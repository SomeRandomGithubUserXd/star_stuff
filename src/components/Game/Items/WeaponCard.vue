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
       class="flex click-sound items-center w-full h-full cursor-pointer rounded border-2 border-solid p-2 shadow"
       :style="{borderColor: ItemRarityEnum.getColors(props.instance.getRarityLevel())[0]}">
    <item-modal :item="props.instance" v-model="showModal"/>
    <div class="flex flex-col mr-2">
      <div class="flex items-center font-bold text-sm">
        <font-awesome-icon class="text-red-600" icon="fas fa-bolt"/>
        <span class="ml-1">
          +&nbsp;{{ props.instance.addsPossibleDamage() }}
        </span>
      </div>
      <div class="flex items-center font-bold text-sm">
        <font-awesome-icon class="text-indigo-500" icon="fas fa-eye"/>
        <span class="ml-1 flex">
          +&nbsp;{{ props.instance.addsPossibleRange() }}
        </span>
      </div>
    </div>
    <div class="w-full h-full"
         style="background-size: contain !important;background-repeat: no-repeat;background-position: center"
         :style="{borderColor: ItemRarityEnum.getColors(props.instance.getRarityLevel())[0], backgroundImage: `url(${props.instance.getImage()})`}">
    </div>
  </div>
</template>