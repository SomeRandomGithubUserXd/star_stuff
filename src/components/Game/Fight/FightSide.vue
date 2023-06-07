<script setup lang="ts">
import {AbstractCharacter} from "@/game/AbstractCharacter";
import PlayerStatsExtended from "@/components/Game/Player/PlayerStatsExtended.vue";
import WeaponCard from "@/components/Game/Items/WeaponCard.vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const props = defineProps<{
  instance: AbstractCharacter,
  isCurrent: boolean,
  reversed: boolean
}>()

const emit = defineEmits(['shot'])
</script>

<style scoped lang="scss">
.player-img {
  transition: .3s all;
  border-radius: 10px;

  &.dodge {
    background: rgba(0, 255, 0, 0.5);
  }

  &.hit {
    background: rgba(255, 0, 0, 0.5);
  }
}
</style>

<template>
  <div class="flex flex-col" :class="{'pointer-events-none': !props.isCurrent}">
    <player-stats-extended
        :animated="props.isCurrent"
        :reversed="props.reversed"
        :instance="props.instance"/>
    <div class="pt-5">
      <weapon-card
          @click.prevent="emit('shot')"
          :modal-on-click="false"
          class="h-20"
          :instance="props.instance.getMainWeapon()"/>
    </div>
    <div
        class="mt-5 rounded w-full bg-cover rounded"
        :style="{backgroundImage: `url(${props.instance.getSector().location.getBackgroundImage() || props.instance.getSector().location.map.getMapImage()})`}">
      <div
          class="flex p-5 w-full justify-end rounded flex-col"
          style="background: rgba(0,0,0,0.5)">
        <div class="flex w-full">
          <div class="text-xl text-green-600"
               :class="{'ml-auto': props.reversed}">
              <span class="mr-0.5" style="text-shadow: 0 0 10px rgba(255,255,255,0.4) !important;">
              +{{ props.instance.getSector().dodgeChanceIncrement }}
              </span>
            <font-awesome-icon icon="fas fa-shield"/>
          </div>
        </div>
        <img :class="{'-scale-x-100': props.reversed, 'ml-auto': !props.reversed}"
             :id="`fight__player-${props.reversed ? 'defending' : 'attacking'}`"
             style="width: 200px; height: 300px;"
             class="object-contain player-img"
             :src="props.instance.getCharacter().fhIcon"/>
      </div>
    </div>
  </div>
</template>