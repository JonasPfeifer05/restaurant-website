<script setup lang="ts">
const navigationStore = useNavigationStore()
</script>

<template>
  <nav id="navbar">
    <div id="title">
      <div id="title">
        Gasthaus Posch
      </div>
      <div id="subtitle">
        Essen mit Liebe
      </div>
    </div>
    <button id="menu-button" @click="navigationStore.toggle">
      <Icon id="menu-icon" name="material-symbols:menu" color="black" />
    </button>
  </nav>
</template>

<style scoped>
#navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 90px;

  padding: 15px;
  border-bottom: 1px lightgrey solid;
  box-sizing: border-box;

  #title {
    #title {
      font-size: 32px;
    }
    #subtitle {
      font-size: 16px
    }
  }

  #menu-button {
    width: 40px;
    height: 40px;

    border: none;
    background: none;

    padding: 4px;
    pointer-events: all;

    #menu-icon {
      width: 32px;
      height: 32px;
    }
  }
}
</style>
