<script setup lang="ts">

</script>

<template>
  <button>
    <slot/>
    <div class="service">
      <span></span><span></span><span></span><span></span>
    </div>
  </button>
</template>

<style scoped>
button:disabled {
  pointer-events: none;
  opacity: .6;
}

button {
  --c: blue;
  color: white;
  font-size: 13px;
  border: 0.3em solid #000;
  border-radius: 0.5em;
  text-transform: uppercase;
  font-weight: bold;
  font-family: sans-serif;
  letter-spacing: 0.1em;
  text-align: center;
  line-height: 3em;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: 0.5s;
  background: #000;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

button.btn-light {
  background: darkblue;
  border-color: darkblue;
}

button .service span {
  position: absolute;
  width: 25%;
  height: 100%;
  background-color: var(--c);
  transform: translateY(150%);
  border-radius: 50%;
  left: calc((var(--n) - 1) * 25%);
  transition: 0.5s;
  transition-delay: calc((var(--n) - 1) * 0.1s);
  z-index: -1;
}

button:hover {
  border: 0.3em solid var(--c);
}

button:hover .service span {
  transform: translateY(0) scale(4);
}

button .service span:nth-child(1) {
  --n: 1;
}

button .service span:nth-child(2) {
  --n: 2;
}

button .service span:nth-child(3) {
  --n: 3;
}

button .service span:nth-child(4) {
  --n: 4;
}
</style>