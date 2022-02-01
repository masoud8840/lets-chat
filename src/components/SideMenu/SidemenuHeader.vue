<template>
  <div class="sidemenu-inner">
    <div class="profile-info">
      <user-profile
        :imgSource="$store.getters.getMyImgSource"
        :userStatus="$store.getters.getMyProfileStatus"
        :type="true"
      ></user-profile>
      <h3>
        {{ $store.getters.getMyName }}
      </h3>
      <p>{{ $store.getters.getMyDiscription }}</p>
    </div>
  </div>
</template>
<script>
import UserProfile from "../UI/UserProfile.vue";

export default {
  components: {
    UserProfile,
  },
};
</script>
<style lang="scss" scoped>
.sidemenu-inner {
  background-color: #ffffff;
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
}
</style>
