<script setup lang="ts">
const navigationStore = useNavigationStore()

const sections = [
  "Unser Traum",
  "Gasthaus",
  "Latenight Bar",
  "Darstellung",
  "Hygene",
  "Kreationen",
  "Kinder",
  "Design",
  "Online-Shop",
  "Feiern mieten",
  "Übernachtungen"
]
</script>

<template>
  <div id="navigation-menu" :class="{ 'hidden': !navigationStore.opened }">
    <div id="heading" class="title-medium">
      Alles über uns!
    </div>
    <div id="anchors">
      <button class="text-medium" v-for="section in sections" :key="section" @click="navigationStore.set(false)">
        {{ section }}
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.hidden {
  transform: translateX(70svw);
}

#navigation-menu {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 2;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  width: 70svw;
  height: 100dvh;

  padding: 16px;
  border-left: 1px lightgrey solid;
  box-sizing: border-box;

  background-color: white;
  transition: transform 1s;

  #heading {
    width: 100%;

    text-align: center;
  }

  #anchors {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;

    button {
      border: none;
      background: transparent;

      text-align: center;

      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
