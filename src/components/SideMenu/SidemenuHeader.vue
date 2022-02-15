<template>
  <div class="sidemenu-inner">
    <div class="profile-info">
      <user-profile
        :imgSource="imgSource"
        :userStatus="profileStatus"
        :type="true"
      ></user-profile>
      <h3>
        {{ $store.getters.getMyName }}
      </h3>
      <p>{{ $store.getters.getMyDiscription }}</p>
    </div>

    <div class="close-btn" @click="changeSidemenuState">
      <i class="fas fa-times"></i>
    </div>
  </div>
</template>
<script>
import UserProfile from "../UI/UserProfile.vue";

export default {
  components: {
    UserProfile,
  },
  computed: {
    imgSource() {
      return this.$store.getters.getMyInfo.imgSource;
    },
    profileStatus() {
      return this.$store.getters.getMyInfo.profileStatus;
    },
  },
  methods: {
    changeSidemenuState() {
      this.$store.dispatch("setSidemenuState", false);
    },
  },
};
</script>
<style lang="scss" scoped>
.sidemenu-inner {
  display: flex;
  flex-direction: column;
  .profile-info {
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .user-profile {
      width: 65px;
      height: 65px;
      box-shadow: 0 0 7px #ccc;
    }
    h3 {
      margin: 15px 0 7px;
      font: 500 18px "Montserrat";
      color: var(--mainTextColor);
    }
    p {
      font: 400 14px "Montserrat";
      color: var(--primaryTextColor);
    }
  }
  .close-btn {
    position: absolute;
    top: 7px;
    right: 10px;
    color: var(--mainTextColor);
    cursor: pointer;
    i {
      font-size: 19px;
    }
  }
}
</style>
