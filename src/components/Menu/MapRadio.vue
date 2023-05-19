<script setup lang="ts">
import {computed, ref} from "vue";
import {AbstractMap} from "@/game/Maps/AbstractMap";

const props = defineProps<{
  modelValue: AbstractMap,
  value: AbstractMap,
}>()

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
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
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
  height: 250px;

  .click-sound {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    border-radius: 8px;
    height: 100%;
    background-size: cover;
    background-position: center;

    .needs-glowing {
      width: 50%;
      margin-bottom: 25px;
    }
  }
}
</style>

<template>
  <div class="wrapper w-full" :class="{'needs-glowing animated': isChecked}">
    <div class="click-sound z-10" @click="input.click()" :style="{backgroundImage: `url(${props.value.getPreviewImage()})`}">
      <div class="needs-glowing py-2 px-3">
        <h4>{{ props.value.getName() }}</h4>
      </div>
    </div>
    <input ref="input" hidden="" name="era" type="radio" :checked="isChecked" :value="value"
           @change="emit('update:modelValue', props.value)"/>
  </div>
</template>