<script setup lang="ts">
const maxImageIndex = 2

const imageIndex = ref(0)

function moveLeft () {
  if (imageIndex.value === 0) {
    imageIndex.value = maxImageIndex
  } else {
    imageIndex.value -= 1
  }
}

function moveRight () {
  if (imageIndex.value === maxImageIndex) {
    imageIndex.value = 0
  } else {
    imageIndex.value += 1
  }
}

const inDrag = ref(false)
const startX = ref(0)
const lastX = ref(0)

function startDrag (e: TouchEvent) {
  startX.value = e.touches[0].clientX
  lastX.value = e.touches[0].clientX
  inDrag.value = true
}

function duringDrag (e: TouchEvent) {
  if (!inDrag.value) {
    return
  }
  lastX.value = e.touches[0].clientX
}

function dragEnd () {
  if (!inDrag.value) {
    return
  }
  const delta = lastX.value - startX.value
  if (delta < -100) {
    moveRight()
  } else if (delta > 100) {
    moveLeft()
  }

  startX.value = 0
  lastX.value = 0

  inDrag.value = false
}

const sliderTranslate = computed(() => {
  return `min(0%, max(calc(${(imageIndex.value + 1) * -100}% + ${lastX.value - startX.value}px), -400%))`
})

</script>

<template>
  <div
    id="slider-window"
    class="slider-sized-w slider-sized-h"
    @touchstart="startDrag"
    @touchmove="duringDrag"
    @touchend="dragEnd"
    @dragend="dragEnd"
  >
    <div id="slider-title">
      Willkommen im Gasthaus Posch
      <div id="slider-sub-title">
        Wo Essen mit Liebe entsteht
      </div>
    </div>
    <button id="left-button" class="navigation-button" @touchstart.stop @click="moveLeft">
      <Icon name="material-symbols:chevron-left-rounded" />
    </button>
    <button id="right-button" class="navigation-button" @touchstart.stop @click="moveRight">
      <Icon name="material-symbols:chevron-right-rounded" />
    </button>
    <div
      id="slider-content"
      :style="{ transform: `translate(${sliderTranslate})` }"
      :class="{ transition: !inDrag }"
    >
      <img class="slide-image slider-sized-w slider-sized-h" src="../assets/images/landing_2.png" alt="">
      <img class="slide-image slider-sized-w slider-sized-h" src="../assets/images/landing_0.png" alt="">
      <img class="slide-image slider-sized-w slider-sized-h" src="../assets/images/landing_1.png" alt="">
      <img class="slide-image slider-sized-w slider-sized-h" src="../assets/images/landing_2.png" alt="">
      <img class="slide-image slider-sized-w slider-sized-h" src="../assets/images/landing_0.png" alt="">
    </div>
  </div>
</template>

<style scoped lang="scss">
.slider-sized-h {
  height: calc(100dvh - 90px);
}

.slider-sized-w {
  width: 100vw;
}

#slider-window {
  position: relative;
  overflow: hidden;

  #slider-title {
    position: absolute;

    top: 17.5%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);

    width: 80%;

    z-index: 1;

    text-align: center;

    color: black;
    font-size: 38px;
    font-weight: bold;

    background-color: rgba(255, 255, 255, 0.9);
    padding: 8px;

    #slider-sub-title {
      font-size: 24px;
      font-weight: normal;
    }
  }

  .navigation-button {
    position: absolute;

    top: 50%;
    transform: translateY(-50%);

    height: 64px;
    width: 64px;

    padding: 0;
    margin: 0;

    z-index: 1;

    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 50%;
    border: none;

    span {
      height: 100%;
      width: 100%;

      border: 1px white;
    }
  }

  #left-button {
    left: 5px;
  }

  #right-button {
    right: 5px;
  }

  #slider-content.transition {
    transition: transform 1s;
  }

  #slider-content {
    display: flex;

    .slide-image {
      object-fit: cover;
    }
  }
}
</style>
