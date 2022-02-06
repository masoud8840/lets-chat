<template>
  <router-link :to="setURL">
    <user-profile
      :imgSource="imgSource"
      :userStatus="userStatus"
    ></user-profile>
    <div class="profile-info">
      <h3>{{ name }}</h3>
      <p>{{ caption.substring(0, 35) }}</p>
    </div>
  </router-link>
</template>

<script>
import UserProfile from "./UserProfile.vue";

export default {
  props: ["ID", "name", "caption", "user-status", "imgSource"],
  components: {
    UserProfile,
  },
  computed: {
    setURL() {
      return this.ID;
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  padding: 15px 20px;
  width: 100%;
  display: flex;
  text-decoration: none;

  .profile-info {
    padding-left: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h3 {
      color: var(--mainTextColor);
      font: 500 15px "Montserrat";
    }
    p {
      font: 400 14px "Montserrat";
      color: var(--secondaryTextColor);
    }
  }

  &:hover {
    background-color: #f8f8f8;
  }

  &.router-link-active {
    background-image: linear-gradient(80deg, #7367f0, #9e95f5);
    h3,
    p {
      color: #ffffff;
    }
  }
}
</style>
