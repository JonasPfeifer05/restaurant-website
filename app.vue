<script setup lang="ts">
import NavigationMenu from "~/components/NavigationMenu.vue";

const navigationStore = useNavigationStore();

function virtualBodyClicked() {
  console.log("clicked")
}
</script>

<template>
  <div id="app-viewport">
    <div id="app-content" :class="{ 'settings-opened': navigationStore.opened }">
      <div id="virtual-body-wrapper" @click="virtualBodyClicked">
        <div id="virtual-body" :class="{ 'disable-virtual-body': navigationStore.opened }">
          <NavigationBar />
          <LandingPage />
        </div>
      </div>
      <NavigationMenu />
    </div>
  </div>
</template>

<style scoped lang="scss">
#app-viewport {
  overflow-x: hidden;

  #app-content {
    display: flex;

    transition: transform 1s;

    &.settings-opened {
      transform: translateX(-70vw);
    }

    #virtual-body {
      display: block;

      &.disable-virtual-body {
        pointer-events: none;
      }
    }
  }
}
</style>
