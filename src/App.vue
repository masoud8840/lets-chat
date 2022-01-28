<template>
  <section id="app">
    <nav>awdasd</nav>
    <section>awawdaw</section>
  </section>
</template>

<style lang="scss">
:root {
  --lightgray: #ebe9f1;
  --purple: #7367f0;

  --primaryTextColor: #5e5873;
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
    background-color: #5e5873;
  }
  nav {
    background-color: #7367f0;
  }
}
</style>
