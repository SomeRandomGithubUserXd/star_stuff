<script setup lang="ts">
const props = defineProps<{
  modelValue: string,
  name: string
}>()

const emit = defineEmits(['update:modelValue'])
</script>

<style lang="scss" scoped>
// colors
$input-background: rgba(57, 63, 84, 0.8);
$input-text-inactive: #7881A1;
$input-text-active: #BFD2FF;

// gradient animation
@keyframes gradient {
  0%{background-position:0 0}
  100%{background-position:100% 0}
}

.webflow-style-input {
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  border-radius: 2px;
  background: $input-background;
  &:after {
    content: "";
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 0px;
    z-index: 999;
    height: 2px;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
    background-position: 0% 0%;
    background: linear-gradient(to right, #B294FF, #57E6E6, #FEFFB8, #57E6E6, #B294FF, #57E6E6);
    background-size: 500% auto;
    animation: gradient 3s linear infinite;
  }
}

.webflow-style-input input {
  flex-grow: 1;
  color: $input-text-active;
  line-height: 2.4rem;
  vertical-align: middle;
  &::-webkit-input-placeholder {
    color: $input-text-inactive;
  }
}

.webflow-style-input button {
  color:  $input-text-inactive;
  vertical-align: middle;
  transition: color .25s;
  &:hover {
    color: $input-text-active;
  }
}

input { border: 0; background: transparent; outline: none; }

</style>

<template>
  <div class="webflow-style-input">
    <input type="text"
           :value="props.modelValue"
           @input="emit('update:modelValue', $event.target.value)"
           :placeholder="props.name"/>
    <button type="submit"><i class="icon ion-android-arrow-forward"></i></button>
  </div>
</template>