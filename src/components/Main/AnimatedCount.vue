<template>
  <span ref="numElement">{{ props.to }}</span>
</template>

<script setup lang="ts">
import gsap, {Power1} from 'gsap';
import {onMounted, ref} from "vue";

const props = defineProps<{
  from: number,
  to: number,
  duration: number,
  delay: number,
}>()

const numElement = ref(null)
onMounted(() => {
  const animate = () => {
    gsap.from(numElement.value, {
      textContent: props.from,
      delay: props.delay,
      duration: 2,
      ease: Power1.easeIn,
      snap: { textContent: 1 },
    });
  }
  animate()
})
</script>