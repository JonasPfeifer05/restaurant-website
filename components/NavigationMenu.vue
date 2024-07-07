<script setup lang="ts">
const navigationStore = useNavigationStore()

const sections = [
  ["Unser Traum", "#our-dream-anchor"],
  ["Gasthaus"],
  ["Latenight Bar"],
  ["Darstellung"],
  ["Hygene"],
  ["Kreationen"],
  ["Kinder"],
  ["Design"],
  ["Online-Shop"],
  ["Feiern mieten"],
  ["Übernachtungen"]
]
</script>

<template>
  <div id="navigation-menu" :class="{ 'hidden': !navigationStore.opened }">
    <div id="heading" class="title-medium">
      Alles über uns!
    </div>
    <div id="anchors">
      <a v-for="section in sections" :key="section[0]" :href="section[1]" class="text-medium" @click="navigationStore.set(false)">
        {{ section[0] }}
      </a>
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

    a {
      border: none;
      background: transparent;

      text-align: center;

      cursor: pointer;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
