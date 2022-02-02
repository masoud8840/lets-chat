<template>
  <section class="sidemenu-base">
    <sidemenu-header></sidemenu-header>
    <sidemenu-body></sidemenu-body>
    <sidemenu-footer></sidemenu-footer>
  </section>
</template>

<script>
import SidemenuHeader from "./SidemenuHeader.vue";
import SidemenuBody from "./SidemenuBody.vue";
import SidemenuFooter from "./SidemenuFooter.vue";

export default {
  components: {
    SidemenuHeader,
    SidemenuBody,
    SidemenuFooter,
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
}
</style>
