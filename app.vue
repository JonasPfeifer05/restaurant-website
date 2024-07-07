<script setup lang="ts">
import NavigationMenu from "~/components/NavigationMenu.vue";
import {useNavigationStore} from "~/stores/navigationStore";

const navigationStore = useNavigationStore()

function virtualBodyClicked() {
  // navigationStore.set(false)
}
</script>

<template>
  <div id="app-viewport">
    <NavigationBar/>
    <NavigationMenu/>
    <div id="app-content" :class="{ 'menu-opened': navigationStore.opened }" @click="virtualBodyClicked">
      <div id="virtual-body" :class="{ 'disable-virtual-body': navigationStore.opened }">
        <LandingSlide/>
        <OurDream/>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">


#app-viewport {
  display: unset;
  overflow-x: hidden;

  #app-content {
    display: flex;

    transition: transform 1s;

    #virtual-body {
      display: block;

      margin-top: 90px;

      &.disable-virtual-body {
        pointer-events: none;
      }
    }
  }
}
</style>
