<template>
  <section id="app">
    <nav class="navigation">
      <navigation-header></navigation-header>
      <sidemenu-base></sidemenu-base>
    </nav>
    <router-view></router-view>
  </section>
</template>

<script>
import NavigationHeader from "./components/Navigation/NavigationHeader.vue";
import SidemenuBase from "./components/SideMenu/SidemenuBase";

export default {
  components: {
    NavigationHeader,
    SidemenuBase,
  },
};
</script>

<style lang="scss">
:root {
  --lightgray: #ebe9f1;
  --purple: #7367f0;

  --mainTextColor: #5e5873;
  --primaryTextColor: #6e6b7b;
  --secondaryTextColor: #b9b9c3;

  // Badges
  --badge-online: #28c76f;
  --badge-do-not-disturb: #ea5455;
  --badge-away: #ff9f43;
  --badge-offline: #82868b;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>

<style lang="scss" scoped>
#app {
  width: 100%;
  max-width: 1300px;
  height: 99vh;
  margin: 0.5vh auto;
  border-radius: 0.35rem;
  border: 1px solid var(--lightgray);
  display: grid;
  grid-template-columns: 0.1fr 1fr;
  overflow: hidden;
  nav {
    position: relative;
  }
}
</style>
