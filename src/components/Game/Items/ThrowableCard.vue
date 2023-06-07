<script setup lang="ts">
import {AbstractMainWeapon} from "@/game/Items/Weapons/AbstractMainWeapon";
import {ItemRarityEnum} from "@/game/Enums/ItemRarityEnum";
import ItemModal from "@/components/Game/Items/ItemModal.vue";
import {ref} from "vue";
import {AbstractThrowable} from "@/game/Items/Throwables/AbstractThrowable";

const props = defineProps<{
  instance: AbstractThrowable
}>()

const showModal = ref(false)
</script>

<template>
  <div @click="showModal = true">
    <item-modal :item="props.instance" v-model="showModal"/>
    <div style="width: 55px;height: 55px"
         @click="showModal = true"
         :style="{borderColor: ItemRarityEnum.getColors(props.instance.getRarityLevel())[0]}"
         class="rounded-full cursor-pointer p-2 flex justify-center items-center animated needs-glowing rounded-glowing border-2 border-solid">
      <img class="auto-img rounded-full" :src="props.instance.getImage()"/>
    </div>
  </div>
</template>