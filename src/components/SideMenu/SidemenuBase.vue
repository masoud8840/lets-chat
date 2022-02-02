<template>
  <section class="sidemenu-base" :style="menuStyle">
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

  computed: {
    menuStyle() {
      if (this.$store.getters.getSidemenuState) {
        return { left: "0" };
      } else {
        return { left: "-100%" };
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.sidemenu-base {
  width: 100%;
  height: 100%;
  top: 0;
  position: absolute;
  border-right: 1px solid var(--lightgray);
  overflow-y: auto;
  transition: left 0.35s;
  background-color: #ffffff;
}
::-webkit-scrollbar {
  -webkit-appearance: none !important;
  width: 20px;
}

::-webkit-scrollbar-track {
  -webkit-appearance: none !important;
  background-color: #f4f4f4;
  padding: 0 10px;
}

::-webkit-scrollbar-thumb {
  background-color: #ddd;
  border-radius: 0.5rem;
}
</style>
