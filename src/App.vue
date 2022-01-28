<template>
  <section id="app">
    <nav>
      <navigation-header></navigation-header>
    </nav>
    <router-view></router-view>
  </section>
</template>

<script>
import NavigationHeader from "./components/Navigation/NavigationHeader.vue";

export default {
  components: {
    NavigationHeader,
  },
};
</script>

<style lang="scss">
:root {
  --lightgray: #ebe9f1;
  --purple: #7367f0;

  // --primaryTextColor: #5e5873;
  --primaryTextColor: #6e6b7b;
  --secondaryTextColor: #b9b9c3;
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
  grid-template-columns: 2fr 5fr;

  section {
  }
  nav {
  }
}
</style>
