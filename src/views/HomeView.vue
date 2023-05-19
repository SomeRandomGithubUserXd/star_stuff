<template>
  <div class="overlay">
    <div class="home" ref="home">
      <button @click="start" type="button" class="btn btn-success btn-fill">
        Начать
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.overlay {
  width: 100vw;
  height: 100vh;
  background: url("@/assets/pictures/main/bg.jpg") center;
  background-size: cover;
}

.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 1);
}

.home.interactable {
  animation: fadeInPicture 10000ms;
  -webkit-animation-fill-mode: forwards; /* Chrome 16+, Safari 4+ */
  -moz-animation-fill-mode: forwards; /* FF 5+ */
  -o-animation-fill-mode: forwards; /* Not implemented yet */
  -ms-animation-fill-mode: forwards; /* IE 10+ */
  animation-fill-mode: forwards;
}

@keyframes fadeInPicture {
  0% {
    background: rgba(0, 0, 0, 1)
  }
  100% {
    background: rgba(0, 0, 0, 0.4)
  }
}
</style>

<script lang="ts" setup>
import {ref} from "vue";
import router from "@/router";

const home = ref(null)

const start = () => {
  home.value.classList.add('interactable')
  const audio = new Audio(require('@/assets/audio/main/intro.mp3'));
  audio.play();
  audio.addEventListener('ended',function(e){
    router.push('/game')
  });
}
</script>
