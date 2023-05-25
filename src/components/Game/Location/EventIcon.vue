<script setup lang="ts">
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const props = defineProps<{
  icon: string
}>()
</script>

<template>
  <div class="relative">
<!--    <div class="absolute bg-green-800 rounded-full text-white"-->
<!--         style="top: -3px;right: -3px;padding:1px;font-size: 10px;width: 20px;height: 20px">-->
<!--      {{ props.count }}-->
<!--    </div>-->
    <font-awesome-icon :icon="props.icon" class="text-yellow-600"/>
  </div>
</template>