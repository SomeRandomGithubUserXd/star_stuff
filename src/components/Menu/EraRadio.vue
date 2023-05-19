<script setup lang="ts">
import {AbstractEra} from "@/game/Eras/AbstractEra";
import {computed, ref} from "vue";

const props = defineProps({
// @ts-ignore
  modelValue: AbstractEra,
  value: AbstractEra
})

const emit = defineEmits(['update:modelValue'])

const isChecked = computed({
  get() {
    return props.modelValue?.getName() === props.value?.getName()
  }, set() {

  }
})

const input = ref(null)
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  background: transparent;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  //box-shadow: 0 0 10px rgba(0,0,0,0.5);
  user-select: none;
}

h4 {
  text-align: center;
}

.wrapper {
  position: relative;
  background: linear-gradient(0deg, #000, #272727);
  transition: .8s all;
  border-radius: 8px;
}


.icons {
  display: flex;
  margin-top: 10px;
  align-items: center;

  img:first-child {
    padding-right: 25px;
    border-right: 2px solid red;
  }

  img:last-child {
    padding-left: 25px;
  }
}
</style>

<template>
  <div>
    <div class="wrapper click-sound" :class="{'needs-glowing animated': isChecked}" @click="input.click()">
      <h4>{{ props.value.getName() }}</h4>
      <div class="icons">
        <img width="60" :src="props.value.lightSideInstance().getIcon">
        <img width="60" :src="props.value.darkSideInstance().getIcon">
      </div>
    </div>
    <input ref="input" hidden="" name="era" type="radio" :checked="isChecked" :value="value"
           @change="emit('update:modelValue', props.value)"/>
  </div>
</template>