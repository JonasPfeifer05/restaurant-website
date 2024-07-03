<script setup lang="ts">

</script>

<template>
  <div id="navigation-menu">
    <div id="heading">Alles über uns!</div>
    <div id="anchors">
      <div>Ein gemeinsamer Traum</div>
      <div>Das Gasthaus</div>
      <div>Schon spät? Besuch unsere latenight Bar</div>
      <div>Ein Schmauß für die Augen!</div>
      <div>Immer alles blitz blank!</div>
      <div>Kreativität ohne Ende!</div>
      <div>Egal ob Groß oder Klein!</div>
      <div>Grandioses Design!</div>
      <div>Ist die Couch zu bequem? Dann bestell Online!</div>
      <div>Eine Feier in Planung? Melde dich!</div>
      <div>Zu betrunken? Dann schlaf bei uns!</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
#navigation-menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  min-width: 70vw;
  height: 100dvh;

  padding: 16px;
  border-left: 1px lightgrey solid;
  box-sizing: border-box;

  #heading {
    width: 100%;

    font-size: 35px;
    text-align: center;
  }

  #anchors {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;

    div {
      text-align: center;
    }
  }
}
</style>
