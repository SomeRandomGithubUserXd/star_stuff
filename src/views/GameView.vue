<template>
  <div v-if="!game" class="menu">
    <new-player-modal v-model="newPlayerModal" @store-player="storePlayer" :side="newPlayerSide"/>
    <video autoplay muted loop id="myVideo">
      <source :src="require('@/assets/videos/main/start_game_footage.mp4')" type="video/mp4">
    </video>
    <div class="menu-block">
      <form @submit.prevent="submit" class="game-form">
        <div class="info animate__animated animate__fadeIn">
          <h1>Star Stuff</h1>
          <h2 class="icon-header">
            <img width="25" :src="require('@/assets/pictures/icons/republic_demo.svg')">
            Эпоха: <span style="text-shadow:1px 1px 2px white, 0 0 1em white;">&nbsp;{{
              era.getName()
            }}</span></h2>
          <h2 class="icon-header">
            <font-awesome-icon icon="fa-solid fa-users"/>
            Количество игроков: <span style="text-shadow:1px 1px 2px white, 0 0 1em white;">&nbsp;{{
              lightSidePlayers.length + darkSidePlayers.length
            }} / 4 </span>
          </h2>
        </div>
        <div class="animate__animated animate__fadeIn animate__delay-1s">
          <div class="era-select mt-12">
            <era-radio v-model="era" v-for="eraInstance in erasAvailable" :value="eraInstance"/>
          </div>
        </div>
        <div class="animate__animated animate__fadeIn animate__delay-1s era-select mt-12 grid grid-cols-6 gap-6 mt-12">
          <map-radio
              class="col-span-6 sm:col-span-2"
              v-model="map"
              v-for="mapInstance in era.getMaps()"
              :value="mapInstance"/>
        </div>
        <div class="grid grid-cols-6 gap-x-24 gap-y-6 mt-7 animate__animated animate__fadeIn animate__delay-2s">
          <menu-team
              @add-new-player="openPlayerModal(era.lightSideInstance())"
              class="col-span-6 sm:col-span-3"
              :players="lightSidePlayers"
              :side="era.lightSideInstance()"
              :icon="{src: require('@/assets/pictures/icons/light_side_icon.png'), width: 35}"/>
          <menu-team
              @add-new-player="openPlayerModal(era.darkSideInstance())"
              class="col-span-6 sm:col-span-3"
              :players="darkSidePlayers"
              :side="era.darkSideInstance()"
              :icon="{src: require('@/assets/pictures/icons/dark_side_icon.png'), width: 25}"/>
        </div>
        <div class="w-full animate__animated animate__fadeIn animate__delay-2s mt-5">
          <custom-button
              type="submit"
              :disabled="lightSidePlayers.length < 1 || darkSidePlayers.length < 1"
              class="w-full btn-light click-sound">
            <font-awesome-icon class="mr-2" icon="fa-solid fa-jedi"/>
            Начать
          </custom-button>
        </div>
      </form>
    </div>
  </div>
  <game-component :game-instance="game" v-else/>
</template>

<script setup lang="ts">
import {onMounted, ref, watch} from "vue";
import {Game} from "@/game/Game";
import {RepublicEra} from "@/game/Eras/RepublicEra";
import EraRadio from "@/components/Menu/EraRadio.vue";
import {ImperialEra} from "@/game/Eras/ImperialEra";
import MenuTeam from "@/components/Menu/MenuTeam.vue";
import {Player} from "@/game/Player";
import {Side} from "@/game/Sides/Side";
import NewPlayerModal from "@/components/Menu/NewPlayerModal.vue";
import CustomButton from "@/components/Main/CustomButton.vue";
import {Tatooine} from "@/game/Maps/Tatooine";
import MapRadio from "@/components/Menu/MapRadio.vue";
import {Geonosis} from "@/game/Maps/Geonosis";
import GameComponent from "@/components/Game/GameComponent.vue";
import {AbstractMap} from "@/game/Maps/AbstractMap"

const erasAvailable = [new RepublicEra(), new ImperialEra()]

const era = ref(new RepublicEra())

const map = ref(new Geonosis())

watch(era, value => {
  const changeEraForPlayers = (players: Player[], side: Side) => {
    for (const player of players) {
      player.side = side
    }
  }
  changeEraForPlayers(lightSidePlayers.value, value.lightSideInstance())
  changeEraForPlayers(darkSidePlayers.value, value.darkSideInstance())
  map.value = value.getMaps()[0]
}, {deep: true})

const lightSidePlayers = ref([])
const darkSidePlayers = ref([])

const newPlayerModal = ref(false)
const newPlayerSide = ref(null)

const openPlayerModal = (side: Side) => {
  newPlayerModal.value = true
  newPlayerSide.value = side
}

const storePlayer = (player: Player) => {
  if (player.side.isEvil) {
    darkSidePlayers.value.push(player)
  } else {
    lightSidePlayers.value.push(player)
  }
}

const game = ref(null)

const audio = new Audio(require('@/assets/audio/main/start_game_backtrack.mp3'));
audio.loop = true
// audio.play();

const submit = () => {
  audio.pause()
  const dsPlayers = darkSidePlayers.value
  for (const player of dsPlayers) {
    player.currentLocation = AbstractMap.lastLocationId
    player.currentSector = 3
  }
  let id = 0
  for (const player of [...dsPlayers, ...lightSidePlayers.value]) {
    player.id = id++
  }
  game.value = new Game(era.value, map.value, lightSidePlayers.value, dsPlayers)
}

</script>

<style lang="scss" scoped>
.menu {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 2rem;
}

#myVideo {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: 1;
}

.menu-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  min-width: 65%;
  //min-height: 75%;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 10px;
  z-index: 2;
  color: white;
  box-shadow: 0 10px rgba(0, 0, 0, 0.6);

  .game-form {
    width: 100%;
    //height: 100%;

    .info {
      text-align: center;

      h1 {
        text-align: center;
        font-family: 'Star Jedi', sans-serif;
        font-size: 3em;
      }

      h2 {
        font-family: 'Star Jedi', sans-serif;
        font-size: 1.3em;
      }
    }

    label {
      font-size: 1.1rem;
    }
  }

  .era-select {
    margin-top: 2rem;
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
}
</style>
