<template>
  <section class="user-profile" v-if="!visible">
    <img :src="imgSource" alt="profile-img" />
    <div id="profile-status" :class="userStatus" v-if="userStatus"></div>
  </section>
</template>

<script>
export default {
  props: ["imgSource", "userStatus", "visible"],
};
</script>

<style lang="scss" scoped>
.user-profile {
  width: 38px;
  height: 38px;
  border: 1px solid #ffffff;
  border-radius: 100px;
  position: relative;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    border-radius: 100px;
  }
  #profile-status {
    position: absolute;
    bottom: -1px;
    right: -2px;
    width: 11px;
    height: 11px;
    border: 1px solid #ffffff;
    border-radius: 100px;
    &.online {
      background-color: var(--badge-online);
    }
    &.away {
      background-color: var(--badge-away);
    }
    &.do-not-disturb {
      background-color: var(--badge-do-not-disturb);
    }
    &.offline {
      background-color: var(--badge-offline);
    }
  }
}
</style>
