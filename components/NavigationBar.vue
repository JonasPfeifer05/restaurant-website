<script setup lang="ts">
const navigationStore = useNavigationStore()
</script>

<template>
  <nav id="navbar" :class="{ 'menu-opened': navigationStore.opened }">
    <div id="title">
      <div id="title" class="title-medium">
        Gasthaus Posch
      </div>
      <div id="subtitle" class="text-medium">
        Essen mit Liebe
      </div>
    </div>
    <button id="menu-button" @click="navigationStore.toggle">
      <Icon id="menu-icon" name="material-symbols:menu" mode="svg" />
    </button>
  </nav>
</template>

<style scoped>
#navbar {
  position: fixed;
  top: 0;
  z-index: 2;

  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 90px;
  width: 100%;

  background-color: white;

  padding: 15px;
  border-bottom: 1px lightgrey solid;
  box-sizing: border-box;

  transition: transform 1s;

  #menu-button {
    width: 40px;
    height: 40px;

    border: none;
    background: none;

    padding: 4px;
    pointer-events: all;

    cursor: pointer;

    #menu-icon {
      width: 32px;
      height: 32px;
    }
  }
}
</style>
