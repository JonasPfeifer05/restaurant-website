<script setup lang="ts">
const settingsOpened = ref(false)

function settings () {
  settingsOpened.value = !settingsOpened.value
}
</script>

<template>
  <div id="app-viewport">
    <button style="position: absolute; z-index: 1" @click="settings">
      Settings
    </button>
    <div id="app-content" :class="{ 'open-settings': settingsOpened }">
      <div id="virtual-body">
        <NavigationBar />
        <LandingPage />
      </div>
      <div id="settings-menu" />
    </div>
  </div>
</template>

<style scoped lang="scss">
#app-viewport {
  overflow-x: hidden;

  #app-content {
    display: flex;

    transition: transform 1s;

    &.open-settings {
      transform: translateX(-70vw);
    }

    #virtual-body {
      display: block;
    }

    #settings-menu {
      min-width: 70vw;
      height: 100dvh;
      background-color: red;
    }
  }
}
</style>
