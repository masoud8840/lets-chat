<template>
  <section class="sidemenu-base">
    <sidemenu-header></sidemenu-header>
    <div class="backdrop">awdadw</div>
  </section>
</template>

<script>
import SidemenuHeader from "./SidemenuHeader.vue";

export default {
  components: {
    SidemenuHeader,
  },
};
</script>

<style lang="scss" scoped>
.sidemenu-base {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 0.38fr 1fr;
  .backdrop {
    backdrop-filter: blur(1px);
    background-color: rgba($color: #000000, $alpha: 0.3);
  }
}
</style>
